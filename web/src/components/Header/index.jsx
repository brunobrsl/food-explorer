import { List, Hexagon, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';


import { ButtonIcon } from '../../components/ButtonIcon';
import { Button } from '../Button';
import { Input } from '../Input';

import { Container, Title } from './styles';

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <ButtonIcon icon={List} onClick={onOpenMenu} />

      <Title>
        <Hexagon weight="fill" />
        <h1>food explorer</h1>
      </Title>

      <Input
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Button icon={Receipt} title="Pedidos (0)" />
        

      
      <ButtonIcon icon={Receipt} title="0" />

      <ButtonIcon icon={SignOut} />
    </Container>
  );
}