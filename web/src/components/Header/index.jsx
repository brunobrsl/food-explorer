import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';
import { USER_ROLE } from '../../utils/roles';

import { List, Hexagon, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Button } from '../Button';
import { Input } from '../Input';

import { Container, Title } from './styles';

export function Header({ onOpenMenu, search }) {
  const { cart } = useCart();
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  function handleNewProduct() {
    navigate("/add");
  }

  function handleHome() {
    navigate("/");
  }

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleCart() {
    navigate("/cart");
  }

  function handleSignOut() {
    navigate("/");
    signOut(user);
  }

  function handleSearch(e) {
    if (search) {
      search(e.target.value);
    }
  }

  return (
    <Container>
      <ButtonIcon className="menu-btn" icon={List} onClick={onOpenMenu} />

      <Title onClick={handleHome}>
        <div className="logo">
          <Hexagon weight="fill" />
          <h1>food explorer</h1>
        </div>

        {[USER_ROLE.ADMIN].includes(user.role) && 
          <div className="admin-logo">
            <span>admin</span>
          </div>
        }
      </Title>

      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
        onChange={handleSearch}
      />

      {[USER_ROLE.CUSTOMER].includes(user.role) && <button className="favorites-btn" onClick={handleFavorites}>Meus favoritos</button>}
      {[USER_ROLE.ADMIN].includes(user.role) && <Button className="new-btn" title="Novo prato" onClick={handleNewProduct} />}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <Button className="cart-btn" icon={Receipt} title={`Pedidos (${cartItemsCount})`} onClick={handleCart} />}
      
      {[USER_ROLE.CUSTOMER].includes(user.role) && <ButtonIcon className="orders-btn" icon={Receipt} title={`${cartItemsCount}`} onClick={handleCart} />}

      <ButtonIcon className="signout-btn" icon={SignOut} onClick={handleSignOut} />
    </Container>
  );
}