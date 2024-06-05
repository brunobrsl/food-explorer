import { useState, useRef, useEffect } from 'react';
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop';

import { X } from '@phosphor-icons/react';

import { Button } from '../Button';

import { Container, Box } from './styles';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 390;

export function Modal({ updateImage, closeModal }) {
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState();
  const [error, setError] = useState('');
  const modalRef = useRef(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  function onSelectFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (event) => {
        if (error) setError("");

        const { naturalWidth, naturalHeight } = event.currentTarget;
        
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Imagem deve ter o tamanho de pelo menos 390 x 390 pixels.");
          return setImgSrc("");
        }
      });

      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  function onImageLoad(event) {
    const { width, height } = event.currentTarget;    
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100; 
    
    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      }, 
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  }

  function setCanvasPreview(image, canvas, crop) {
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("No 2d context");
    }

    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

    context.scale(pixelRatio, pixelRatio);
    context.imageSmoothingQuality = "high";
    context.save();

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;

    context.translate(-cropX, -cropY);
    context.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );

    context.restore();
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [modalRef, closeModal]);

  return (
    <Container>
      <Box ref={modalRef}>
        <div className="btn">
          <label htmlFor="image">
            Escolher arquivo
            <input 
              id="image"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
          </label>
        
          <button className="close-modal" onClick={closeModal}><X/></button>
        </div>

        
        {error && <p>{error}</p>}
        {imgSrc && 
          <div className="image-cropper">
            <ReactCrop 
              crop={crop}
              onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
              circularCrop
              keepSelection
              aspect={ASPECT_RATIO}
              >
              <img ref={imgRef} src={imgSrc} alt="Upload" onLoad={onImageLoad} />
            </ReactCrop>

            <Button className="crop-btn" title="Recortar" 
              onClick={() => {
                setCanvasPreview(
                  imgRef.current,
                  previewCanvasRef.current,
                  convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height)
                );
                const dataUrl = previewCanvasRef.current.toDataURL();
                updateImage(dataUrl);
                closeModal();
              }} 
            />
          </div>
        }
        {crop &&
          <canvas 
            ref={previewCanvasRef} 
            style={{
              display: "none",
              border: "1px solid black",
              objectFit: "contain",
              width: 390,
              height: 390,
            }}
          />
        }
      </Box>
    </Container>
  );
}