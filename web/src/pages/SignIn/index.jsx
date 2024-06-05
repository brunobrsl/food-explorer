import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hexagon } from '@phosphor-icons/react';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Title, Form } from './styles';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleToSignUpPage() {
    navigate("/register");
  }

  function handleSignIn() {
    signIn({ email, password });
  }

  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      event.preventDefault();
      handleSignIn();
    }
  }

  return (
    <Container>
      <Title>
        <Hexagon weight="fill" />
        <h1>food explorer</h1>
      </Title>

      <Form>
        <h1>Faça login</h1>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onKeyDown={handleKeyDown}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password" 
          placeholder="No mínimo 6 caracteres"
          type="password"
          onKeyDown={handleKeyDown}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <a onClick={handleToSignUpPage}>Criar uma conta</a>
      </Form>
    </Container>
  );
}