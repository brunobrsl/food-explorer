import { Container } from './styles';

export function Button({ icon: Icon, title, disabled = false, ...rest }) {
  return (
    <Container type="button" disabled={disabled} {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  );
}