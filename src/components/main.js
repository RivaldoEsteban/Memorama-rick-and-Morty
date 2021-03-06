import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../App";
import Cart from "./cart";

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
  const [playActions, setPlayActions] = useState([]);
  // const random = context.value.sort(() => Math.random() - 0.5);

  return (
    <MainStyled>
      {context.value.map((character) => {
        return (
          <Cart
            key={character.id}
            character={character}
            setPlayActions={setPlayActions}
            playActions={playActions}
          />
        );
      })}
      {context.value.map((character) => {
        return (
          <Cart
            key={character.name}
            character={character}
            setPlayActions={setPlayActions}
            playActions={playActions}
          />
        );
      })}
    </MainStyled>
  );
}

export default Main;
