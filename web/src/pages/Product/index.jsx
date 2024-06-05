import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { api } from '../../services/api';

import { Minus, Plus, Receipt } from '@phosphor-icons/react';

import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonText } from '../../components/ButtonText';
import { Ingredient } from '../../components/Ingredient';
import { SideMenu } from '../../components/SideMenu';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Main, Dish, Content, Ingredients, Buttons, Quantity } from './styles';

export function Product() {
  const { addItemToCart } = useCart();
  const { user } = useAuth();

  const [data, setData] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const params = useParams();
  const navigate = useNavigate();
  
  const imageUrl = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleBack() {
    navigate(-1);
  }

  function handleEditProduct() {
    navigate(`/products/edit/${params.id}`);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * data.price);
    }
  }

  function handleIncreaseQuantity() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * data.price);
  }

  function handleAddToCart() {
    addItemToCart(data, quantity);
    navigate("/cart");
  }
 
  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
      setTotalPrice(response.data.price);
    }

    fetchProduct();
  }, []);

  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Main>
        <ButtonText title="voltar" onClick={handleBack} />
        {
          data &&
          <Dish>
            <img src={imageUrl} alt={`Imagem do Produto - (${data.name})`} />

            <Content>
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              <Ingredients>
                {
                  data.tags &&
                  data.tags.map(tag => (
                    <Ingredient 
                      key={String(tag.id)}
                      title={tag.name} 
                    />
                  ))
                }
              </Ingredients>

              {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <Buttons>
                  <Quantity>
                    <ButtonIcon icon={Minus} onClick={handleDecreaseQuantity} />
                    <span>{String(quantity).padStart(2, '0')}</span>
                    <ButtonIcon icon={Plus} onClick={handleIncreaseQuantity} />
                  </Quantity>

                  <Button icon={Receipt} title={`pedir ∙ R$ ${totalPrice.toFixed(2).replace('.', ',')}`} onClick={handleAddToCart} />
                  <Button title={`incluir ∙ R$ ${totalPrice.toFixed(2).replace('.', ',')}`} onClick={handleAddToCart} />
                </Buttons>
              }     

              {[USER_ROLE.ADMIN].includes(user.role) && <Button title="Editar prato" onClick={handleEditProduct} />}
            </Content>
          </Dish>
        }
      </Main>

      <Footer />
    </Container>
  );
}