import { useState } from 'react';

import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import { Trash } from '@phosphor-icons/react';

import { SideMenu } from '../../components/SideMenu';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Main, CartItem, Total } from './styles';

export function Cart() {
  const { cart, removeItemFromCart, clearCart } = useCart();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

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
        {cart.length === 0 ? (
          <div className="empty-cart">Seu carrinho está vazio.</div>
        ) : (
          <>
            <h1>Meu pedido</h1>

            <div className="clear-cart">
              <button onClick={clearCart}>Limpar carrinho</button>
            </div>

            {cart.map((item) => (
              <CartItem key={String(item.id)}>
                <img src={`${api.defaults.baseURL}/files/${item.image}`} alt={`Imagem do Produto - (${item.name})`} />
                
                <div className="product-data">
                  <div className="info">
                    <h2>{item.quantity} x - {item.name}</h2>
                    <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
              
                  <Trash onClick={() => removeItemFromCart(item.id)} />
                </div>
              </CartItem>
            ))}

            <Total>
              <h3>Total:</h3>
              <span>R$ {totalAmount.toFixed(2).replace('.', ',')}</span>
            </Total>
            
            <div className="button-container">
              <Button title="Avançar" />
            </div> 
          </>
        )}
      </Main>
    
      <Footer />
    </Container>
  );
}