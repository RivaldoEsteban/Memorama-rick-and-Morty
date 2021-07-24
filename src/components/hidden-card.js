import React from "react";
import styled from "styled-components";
import ActiveCart from "./active-cart";

const CardStyled = styled.div`
  inline-size: 17.5rem;
  block-size: 25rem;
  border-radius: 0.5rem;
  background-image: url(${process.env.PUBLIC_URL}/images/card.png);
  cursor: pointer;
`;

function HiddenCart({ character, setActiveCart, setPlayActions, playActions }) {
  function handleCard() {
    setPlayActions([...playActions, character.name]);
    setActiveCart(true);
  }
  return (
    <CardStyled
      onClick={handleCard}
      className="animate__animated animate__flipInY"
    ></CardStyled>
  );
}

export default HiddenCart;
