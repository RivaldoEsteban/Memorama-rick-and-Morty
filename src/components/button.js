import React from "react";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  color: var(--primary);
  background: #a7dc50;
  border: none;
  font: var(--button);
  text-transform: uppercase;
  border-radius: 2rem;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

function Button() {
  return <ButtonStyled></ButtonStyled>;
}

export default Button;
