import { CaretLeft } from '@phosphor-icons/react';

import { Container } from './styles';

export function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <CaretLeft />
      <span>{title}</span>
    </Container>
  );
}