import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonStyled } from "./button";
import { Context } from "../App";

const WinStyled = styled.div`
  position: fixed;
  inline-size: 36.87rem;
  block-size: 26.25rem;
  border-radius: 3rem;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  top: calc(50% - (26.25rem / 2));
  left: calc(50% - (36.87rem / 2));
  z-index: 5;
  box-sizing: border-box;
  h2 {
    font: var(--subtitle1);
  }
  @media (max-width: 600px) {
    position: fixed;
    margin: 0 1rem;
    block-size: 20rem;
    inline-size: calc(100% - 2rem);
    top: calc(50% - 10rem);
    left: 0;
    padding: 2rem;
    box-sizing: border-box;
  }
`;

function Win() {
  const context = useContext(Context);

  return (
    <WinStyled>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <h2>¡Felicidades!, has completado el juego.</h2>
      <ButtonStyled>siguiente nivel</ButtonStyled>
    </WinStyled>
  );
}

export default Win;
