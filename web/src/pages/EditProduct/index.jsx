import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop';

import { X, Plus, PencilSimple, CaretDown } from '@phosphor-icons/react';

import { api } from '../../services/api';

import { ButtonText } from '../../components/ButtonText';
import { SideMenu } from '../../components/SideMenu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Main, Form, ProductImg, TagsInput, Modal, Box } from './styles';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 390;

export function EditProduct() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeicao");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [imgFile, setImgFile] = useState(null);
  const [imgType, setImgType] = useState('');
  const [crop, setCrop] = useState();
  const [error, setError] = useState('');
  const modalRef = useRef(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function updateImage(blob) {
    const dataUrl = URL.createObjectURL(blob);
    setImageUrl(dataUrl);
    setImgFile(blob);
  }

  function formPreventDefault(e) {
    e.preventDefault();
  }

  function handleTagChange(e) {
    const { value } = e.target;
    setTag(value);
  }

  function handleTagKeyDown(e) {
    const { key } = e;
    const newTag = tag.trim();

    if((key === ',' || key === 'Enter' || key === 'Tab') && newTag.length && !tags.includes(newTag)) {
      e.preventDefault();
      setTags(prevTags => [...prevTags, newTag]);
      setTag('');
    } else if (key === 'Backspace' && !newTag.length && tags.length) {
      e.preventDefault();

      const tagsCopy = [...tags];
      const lastTag = tagsCopy.pop();

      setTags(tagsCopy);
      setTag(lastTag);
    }
  }

  function handleTagClick(e) {
    const newTag = tag.trim();

    e.preventDefault();
    setTags(prevTags => [...prevTags, newTag]);
    setTag("");
  }

  function removeTag(index) {
    setTags(prevTags => prevTags.filter((tag, i) => i !== index));
  }

  function handlePriceBlur(event) {
    const inputValue = event.target.value;
    const formattedValue = parseFloat(inputValue).toFixed(2);
    setPrice(formattedValue);
  }

  async function handleUpdate() {
    if (!name) {
      return alert("Insira o nome do produto.");
    }

    if (tag) {
      return alert("Um ingrediente não foi adicionado. Adicione ou deixe o campo vazio.");
    }

    if (tags.length === 0) {
      return alert("Deve ser inserido pelo menos um ingrediente.");
    }
    
    if (isNaN(price) || !price) {
      return alert("Insira o preço do produto.");
    }

    if (!description) {
      return alert("Insira uma breve descrição sobre o produto.");
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", Number(price));
    formData.append("description", description);
    formData.append("image", imgFile);

    tags.forEach(tags => {
      formData.append("tags[]", tags);
    });

    await api.patch(`products/edit/${params.id}`, formData).then(() => {
      alert("Produto atualizado com sucesso!");
      navigate(-1);
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o produto");
        console.log(error);
      }
    });
  }

  async function handleDelete() {
    const confirm = window.confirm("Deseja realmente excluir o produto?");

    if(confirm) {
      await api.delete(`/products/${params.id}`);
      navigate("/");
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }  

  function onSelectFile(event) {
    const file = event.target.files[0];
    setImgFile(file);
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

      const fileExtension = file.name.split('.').pop().toLowerCase();

      switch (fileExtension) {
        case 'png':
          setImgType('image/png');
          break;
        default:
          setImgType('image/jpeg');
      }
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

    canvas.toBlob((blob) => {
      if(blob) {
        updateImage(blob);
      }
    }, imgType);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [modalRef, closeModal]);

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    if (data) {
      setImageUrl(`${api.defaults.baseURL}/files/${data.image}`);
      setName(data.name);
      setCategory(data.category);
      setTags(data.tags.map((tag) => tag.name));
      setPrice(data.price.toFixed(2));
      setDescription(data.description);
    }
  }, [data]);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Main>
        <ButtonText title="voltar" onClick={handleBack} />
    
        <h1>Editar prato</h1>
        
        {data &&
          <Form onSubmit={formPreventDefault}>

          <ProductImg className="grid-row-span-2">
            <img src={imageUrl} alt={`Imagem do Produto - (${data.name})`} />
          
            <button htmlFor="product-img" onClick={() => setModalIsOpen(true)}>
              <PencilSimple weight="bold" />
            </button>
          </ProductImg>

          <div className="form-input grid-col-span-2">
            <label htmlFor="product">Nome</label>
            <Input 
              id="product" 
              placeholder="Ex.: Salada Caesar"
              value={name}
              onChange={e => setName(e.target.value)}  
            />
          </div>
            
          <div className="form-input category-select grid-col-span-2">
            <label htmlFor="category">Categoria</label>
            <div>
              <CaretDown />
              <select
                value={category}
                name="category"
                id="category"
                onChange={e => setCategory(e.target.value)}
                >
                <option value="Refeicao">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
              </select>
            </div>
          </div>
            
          <div className="form-input grid-col-span-3">
            <label htmlFor="tags">Ingredientes</label>
            <TagsInput>
              {tags.map((tag, index) => (
                <div key={index} className="tag-item">
                  <span>{tag}</span>
                  <button 
                    className="remove-btn"
                    onClick={() => removeTag(index)}
                    >
                    <X />
                  </button>
                </div>
              ))}

              <div className="tag-input">
                <input
                  id="tags"
                  type="text"
                  placeholder="Adicionar"
                  value={tag}
                  onChange={handleTagChange}
                  onKeyDown={handleTagKeyDown}
                />

                <button
                  className="add-button"
                  type="button"
                  onClick={handleTagClick}
                  >
                  <Plus />
                </button>
              </div>
            </TagsInput>
          </div>
            
          <div className="form-input">
            <label htmlFor="price">Preço</label>
            <Input 
              className="price-input"
              id="price"
              type="number"
              placeholder="R$ 00,00"
              value={price} 
              onChange={e => setPrice(e.target.value)}
              onBlur={handlePriceBlur}
            />
          </div>
            
          <div className="form-input">
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes, sua composição..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button className="delete-btn" title="Excluir prato" onClick={handleDelete} />
          <Button className="submit-btn" title="Salvar alterações" onClick={handleUpdate} />
        </Form>
        }
      </Main>

      <Footer />

      {modalIsOpen && (
        <Modal>
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
                      convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height),
                      imgType
                    );
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
        </Modal>
      )}
    </Container>
  );
}