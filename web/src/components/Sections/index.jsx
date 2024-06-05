import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './styles';

import { PrevArrow } from '../PrevArrow';
import { NextArrow } from '../NextArrow';

import { Card } from '../Card';

export function Sections({ search }) {
  let sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  function handleProducts(id) {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?name=${search}`);
      setProducts(response.data);
    }

    fetchProducts();
  }, [search]);

  const renderSection = (title, category) => {
    const filteredProducts = products.filter((product) => product.category === category);

    return (
      <div className="section">
        <h2>{title}</h2>

        <div className="slider-container">
          {filteredProducts.length > 0 ? (
            <Slider {...sliderSettings}>
              {filteredProducts.map((product) => (
                  <Card
                    key={String(product.id)}
                    data={product}
                    onClick={() => handleProducts(product.id)}
                    productId={product.id}
                  />
                ))}
            </Slider>
          ) : (
            <div className="no-products">Nenhum produto encontrado.</div>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <Container>
      {renderSection("Refeições", "Refeicao")}
      {renderSection("Sobremesas", "Sobremesa")}
      {renderSection("Bebidas", "Bebida")}
    </Container>
  );
}