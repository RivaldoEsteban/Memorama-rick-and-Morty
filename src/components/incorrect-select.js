import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { ButtonStyled } from "./button";
import { Context } from "../App";

const IncorrectSelectStyled = styled.div`
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
  display: none;

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

function IncorrectSelect({ setActiveCart }) {
  const context = useContext(Context);
  const incorrect = useRef(null);
  useEffect(() => {
    context.modal = { ...context.modal, incorrect };
  }, [incorrect]);

  function handleCLick() {
    const modal = document.getElementById("incorrect");
    if (
      Number(
        context.ref.lives.textContent && Number(context.ref.points.textContent)
      ) >= 1
    ) {
      context.ref.lives.textContent = Number(context.ref.lives.textContent) - 1;
      context.ref.points.textContent =
        Number(context.ref.points.textContent) - 100;
      setActiveCart(false);
    }
  }
  return (
    <IncorrectSelectStyled onClick={handleCLick} id="incorrect" ref={incorrect}>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <h2>
        ¡Cuidado!, ese no es el par correcto. Perdiste 100 puntos y una vida.
      </h2>
      <ButtonStyled>continuar</ButtonStyled>
    </IncorrectSelectStyled>
  );
}

export default IncorrectSelect;
