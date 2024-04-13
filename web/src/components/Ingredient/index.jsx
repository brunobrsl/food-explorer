import { Container } from './styles';

export function Ingredient({ title, ...rest }) {
  return (
    <Container>
      {title}
    </Container>
  );
}