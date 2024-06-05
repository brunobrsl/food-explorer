import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { api } from '../../services/api';

import { HeartStraight, PencilSimple, Minus, Plus } from '@phosphor-icons/react';

import { ButtonIcon } from '../ButtonIcon';
import { Button } from '../Button';

import { Container, AddButtons, Quantity } from './styles';

export function Card({ data, onClick, productId }) {
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`;
  
  const { addItemToCart } = useCart();
  const { user } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(data.price);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  function handleEditProduct(event) {
    event.stopPropagation();
    navigate(`/products/edit/${productId}`);
  }

  async function toggleFavorite(event) {
    event.stopPropagation();
   
    await api.post("/favorites", { product_id: productId })
    .then(() => {
      setIsFavorite(prev => !prev);
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível favoritar o produto.");
        console.log(error);
      }
    });
  }

  function handleDecreaseQuantity(event) {
    event.stopPropagation();
    
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * data.price);
    }
  }

  function handleIncreaseQuantity(event) {
    event.stopPropagation();
    
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * data.price);
  }

  function handleAddToCart(event) {
    event.stopPropagation();

    addItemToCart(data, quantity);
    alert("Produto adicionado com sucesso!")
  }

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        const favoritesId = response.data.map(favorite => favorite.id);
        setIsFavorite(favoritesId.includes(productId));
      } catch (error) {
        console.log("Erro ao buscar status do favorito", error);
      }
    }

    fetchFavorites();
  }, [productId]);

  return (
    <Container onClick={onClick} >
      {[USER_ROLE.CUSTOMER].includes(user.role) && isFavorite ? <HeartStraight className="favorite" onClick={toggleFavorite} weight="fill" /> :  <HeartStraight onClick={toggleFavorite} />}
      {[USER_ROLE.ADMIN].includes(user.role) && <ButtonIcon icon={PencilSimple} onClick={handleEditProduct} />}

      <img src={imageUrl} alt={`Imagem do Produto - (${data.name})`} />

      <h3>{data.name} &gt;</h3>

      <p>{data.description}</p>
    
      <strong>R$ {totalPrice.toFixed(2).replace('.', ',')}</strong>

      {[USER_ROLE.CUSTOMER].includes(user.role) &&
        <AddButtons>
          <Quantity>
            <ButtonIcon icon={Minus} onClick={handleDecreaseQuantity} />
              <span>{String(quantity).padStart(2, '0')}</span>
            <ButtonIcon icon={Plus} onClick={handleIncreaseQuantity} />
          </Quantity>
          
          <Button title="incluir" onClick={handleAddToCart} />
        </AddButtons>
      }

    </Container>
  );
}