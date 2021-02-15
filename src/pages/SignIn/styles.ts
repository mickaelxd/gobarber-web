import styled from 'styled-components';
import { shade } from 'polished';

import LoginBackground from '../../assets/login-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f1ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f1ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  background: url(${LoginBackground}) no-repeat center;
  background-size: cover;
`;
