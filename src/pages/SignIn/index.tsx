import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Logo from '../../assets/icons/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Gobarber" width={200} />
        <form>
          <h1>Faça seu logon</h1>

          <Input Icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            Icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button name="enviar" type="submit">
            Entrar
          </Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          <FiLogIn /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
