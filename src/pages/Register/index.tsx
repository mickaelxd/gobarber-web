import React from 'react';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';
import Logo from '../../assets/icons/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={Logo} alt="Gobarber" width={200} />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input Icon={FaUser} name="name" type="text" placeholder="Nome" />
          <Input Icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            Icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button name="enviar" type="submit">
            Registrar
          </Button>
        </Form>

        <a href="/">
          <FiArrowLeft /> Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default Register;
