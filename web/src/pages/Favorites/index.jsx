import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { HeartStraight } from '@phosphor-icons/react';

import { SideMenu } from '../../components/SideMenu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Main, Products, ProductCard } from "./styles";

export function Favorites() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  async function handleRemoveFavorite(event, productId) {
    event.stopPropagation();

    await api.delete(`/favorites/${productId}`);

    setFavorites(prevFavorites => prevFavorites.filter(product => product.id !== productId));
  }

  function handleProducts(id) {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get("/favorites");
      setFavorites(response.data);
    }

    fetchFavorites();
  }, []);

  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header 
        onOpenMenu={() => setMenuIsOpen(true)}
      />

      <Main>
        {favorites.length === 0 ? (
          <div className="empty-favorites">Não possui favoritos</div>
        ) : (
          <>
            <h1>Meus favoritos</h1>

            <Products>
              {favorites.map(product => (
                <div key={String(product.id)} onClick={() => handleProducts(product.id)}>
                  <ProductCard>
                    <img src={`${api.defaults.baseURL}/files/${product.image}`} alt={`Imagem do Produto - (${product.name})`} />

                    <div className="product-data">
                      <h2>{product.name}</h2>

                      <HeartStraight weight="fill" onClick={(event) => handleRemoveFavorite(event, product.id)} />
                    </div>
                  </ProductCard>
                </div>
              ))}
            </Products>
          </>
        )}
      </Main>

      <Footer />
    </Container>
  );
}