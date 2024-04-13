import { useEffect } from 'react';

import { X, MagnifyingGlass } from '@phosphor-icons/react';

import { Container, Header, Content } from './styles';

import { ButtonMenu } from '../ButtonMenu';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';

export function SideMenu({ menuIsOpen, onCloseMenu }) {
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

        <ButtonMenu title="Novo prato" />
        <ButtonMenu title="Sair" />
      </Content>
    </Container>
  );
}