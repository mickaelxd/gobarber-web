import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { Form } from '@unform/web';
import * as yup from 'yup';

import { Container, Content, Background } from './styles';
import Logo from '../../assets/icons/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup
          .string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: yup
          .string()
          .min(6, 'Sua senha deve conter no mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.log('passou');
    } catch (e) {
      console.log(e.errors);
    }
  }, []);

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
