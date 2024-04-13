import { Container } from './styles';

export function ButtonIcon({ icon: Icon, title,  ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  );
}