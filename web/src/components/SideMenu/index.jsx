import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { X, MagnifyingGlass } from '@phosphor-icons/react';

import { Container, Header, Content } from './styles';

import { ButtonMenu } from '../ButtonMenu';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleNewProduct() {
    navigate("/add");
  }

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleSignOut() {
    navigate("/");
    signOut(user);
  }

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuIsOpen]);

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <ButtonIcon icon={X} onClick={onCloseMenu} />

        <h1>Menu</h1>
      </Header>

      <Content>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        />

        {[USER_ROLE.ADMIN].includes(user.role) && <ButtonMenu title="Novo prato" onClick={handleNewProduct} />}
        {[USER_ROLE.CUSTOMER].includes(user.role) && <ButtonMenu title="Meus favoritos" onClick={handleFavorites} />}
        <ButtonMenu title="Sair" onClick={handleSignOut} />
      </Content>
    </Container>
  );
}