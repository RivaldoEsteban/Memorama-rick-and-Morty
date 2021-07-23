import React, { useState, useContext } from "react";
import styled from "styled-components";
import HiddenCart from "./hidden-card";
import ActiveCart from "./active-cart";
import { Context } from "../App";

const MainStyled = styled.main`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  row-gap: 50px;
  flex: 1;
  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

function Main() {
  const context = useContext(Context);
  const arrayUntidy = context.value.sort(() => Math.random() - 0.5);
  console.log(arrayUntidy);
  const [cardActive, setCardActive] = useState("id");
  console.log(cardActive);
  return (
    <MainStyled>
      {arrayUntidy.map((character) => {
        return (
          <HiddenCart
            key={character.id}
            character={character}
            setCardActive={setCardActive}
          />
        );
      })}
    </MainStyled>
  );
}

export default Main;

{
  /* <div onClick={handleCart1}>
  {tarjeta ? (
    <ActiveCart
      characterData={personage1}
      setCardActive={setCardActive}
      setTarjeta={setTarjeta}
    />
  ) : (
    <HiddenCart setCardActive={setCardActive} />
  )}
</div>; */
}
