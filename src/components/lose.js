import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { ButtonStyled } from "./button";
import { Context } from "../App";

const LoseStyled = styled.div`
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

function Lose() {
  const context = useContext(Context);
  const lose = useRef(null);
  useEffect(() => {
    context.modal = { ...context.modal, lose };
  }, [lose]);
  console.log(context);
  function handleClick() {
    context.ref.lives.textContent = 3;
    context.ref.points.textContent = 300;
    // setActiveCart(false);
    lose.current.style.display = "none";
  }
  return (
    <LoseStyled ref={lose}>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <h2>Te has quedado sin vidas.</h2>
      <ButtonStyled onClick={handleClick}>Volver a jugar</ButtonStyled>
    </LoseStyled>
  );
}

export default Lose;
