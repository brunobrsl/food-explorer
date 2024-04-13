import { Hexagon } from '@phosphor-icons/react';

import { Container, Title } from './styles';

export function Footer() {
  return (
    <Container>
      <Title>
        <Hexagon weight="fill" />
        <h1>food explorer</h1>
      </Title>

      <h1></h1>

      <span>&copy; 2024 - Todos os direitos reservados.</span>
    </Container>
  );
}