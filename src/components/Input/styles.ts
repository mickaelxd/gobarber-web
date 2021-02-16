import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  transition: color 0.2s, border 0.2s;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  input {
    color: #f1ede8;
    background-color: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
