import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  inline-size: 17.5rem;
  block-size: 25rem;
  border-radius: 0.5rem;
  background-image: url(${process.env.PUBLIC_URL}/images/card.png);
`;

function HiddenCart({ characterData, setCardActive }) {
  function handleCard() {
    setCardActive(true);
  }
  return (
    <CardStyled
      onClick={handleCard}
      className="animate__animated animate__flipInY"
    ></CardStyled>
  );
}

export default HiddenCart;
