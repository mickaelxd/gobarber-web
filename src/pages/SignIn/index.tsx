import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Logo from '../../assets/icons/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Gobarber" width={200} />
        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          Criar conta <FiLogIn />
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
