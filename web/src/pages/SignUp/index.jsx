import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hexagon } from '@phosphor-icons/react';

import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Title, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
          console.log(error);
        }
      })
  }

  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      event.preventDefault();
      handleSignUp();
    }
  }

  return (
    <Container>
      <Title>
        <Hexagon weight="fill" />
        <h1>food explorer</h1>
      </Title>

      <Form>
        <h1>Crie sua conta</h1>
        
        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onKeyDown={handleKeyDown}
          onChange={e => setName(e.target.value)}
        />

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

        <Button title="Criar conta" onClick={handleSignUp} />

        <a onClick={handleBack}>Já tenho uma conta</a>
      </Form>
    </Container>
  );
}