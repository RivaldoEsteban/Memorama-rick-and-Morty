import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { ButtonStyled } from "./button";
import { Context } from "../App";

const CorrectSelectionStyled = styled.div`
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

function CorrectSelection({ setActiveCart }) {
  const context = useContext(Context);
  const correct = useRef(null);
  useEffect(() => {
    context.modal = { ...context.modal, correct };
  }, [correct]);

  // function handleClick() {
  //   const modal = document.getElementById("modalCorrect");
  //   context.ref.points.textContent = "100";
  //   modal.style.display = "none";
  // }
  function handleHiddenModal() {
    context.ref.points.textContent =
      Number(context.ref.points.textContent) + 100;
    correct.current.style.display = "none";
  }
  return (
    <CorrectSelectionStyled ref={correct}>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <h2>¡Felicidades!, has encontrado un par. Ganaste 100 puntos.</h2>
      <ButtonStyled onClick={handleHiddenModal}>continuar</ButtonStyled>
    </CorrectSelectionStyled>
  );
}

export default CorrectSelection;
