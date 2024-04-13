import { Hexagon } from '@phosphor-icons/react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Title, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <Title>
        <Hexagon weight="fill" />
        <h1>food explorer</h1>
      </Title>

      <Form>
        <h1>Faça login</h1>

        <label>Email</label>
        <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
        />

        <label>Senha</label>
        <Input 
          placeholder="No mínimo 6 caracteres"
          type="password"
        />

        <Button title="Entrar" />

        <a href="">Criar uma conta</a>
      </Form>
    </Container>
  );
}