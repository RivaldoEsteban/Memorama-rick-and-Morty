import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "./button";
const StartGameModalStyled = styled.div`
  dialog {
    block-size: 24.37rem;
    inline-size: 36.87rem;
    position: absolute;
    top: calc(50% - (24.37rem / 2));
    object-fit: cover;
    box-sizing: border-box;
    border: none;
    border-radius: 2rem;
    padding-top: 1.5rem;
    z-index: 20;
    opacity: 1;
    background-image: url(${process.env.PUBLIC_URL}/images/start.jpg);
  }
  dialog button {
    position: absolute;
    right: 1rem;
  }
  @media (max-width: 600px) {
    dialog {
      box-sizing: border-box;
      margin: 0 2rem;
      inline-size: calc(100% - 4rem);
    }
  }
`;

function StartGameModal({ setPlay }) {
  function handleActions() {
    setPlay(true);
  }
  return (
    <StartGameModalStyled>
      <dialog className="modal animate__animated animate__fadeInDown" open>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
        <ButtonStyled onClick={handleActions}> jugar</ButtonStyled>
      </dialog>
    </StartGameModalStyled>
  );
}

export default StartGameModal;
