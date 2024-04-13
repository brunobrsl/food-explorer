import { Hexagon } from '@phosphor-icons/react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Title, Form } from './styles';

export function SignUp() {
  return (
    <Container>
      <Title>
        <Hexagon weight="fill" />
        <h1>food explorer</h1>
      </Title>

      <Form>
        <h1>Crie sua conta</h1>
        
        <label>Seu nome</label>
        <Input 
          placeholder="Exemplo: Maria da Silva"
          type="text"
        />

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

        <Button title="Criar conta" />

        <a href="">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}