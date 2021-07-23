import React, { useState, useContext } from "react";
import styled from "styled-components";
import HiddenCart from "./hidden-card";
import ActiveCart from "./active-cart";
import { Context } from "../App";
import getOneCharacter from "../services/getOneCharacter";

const MainStyled = styled.main`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  /* height: calc(100vh - 200px); */
  justify-content: space-between;
  row-gap: 50px;
  flex: 1;
  /* overflow: auto; */
  @media (max-width: 900px) {
    justify-content: space-evenly;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

function Main() {
  const context = useContext(Context);
  const personage1 = context.value.slice(0, 1);
  const personage2 = context.value.slice(1, 2);
  const personage3 = context.value.slice(2, 3);
  const personage4 = context.value.slice(3, 4);
  const personage5 = context.value.slice(4, 5);
  const personage6 = context.value.slice(5, 6);
  const personage7 = context.value.slice(6, 7);
  const personage8 = context.value.slice(7, 8);
  // console.log(personage5[0]);

  const [cardActive, setCardActive] = useState(false);
  console.log(cardActive);
  return (
    <MainStyled>
      {cardActive ? (
        <ActiveCart characterData={personage1} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage2} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage3} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage4} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage5} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage6} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage7} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
      {cardActive ? (
        <ActiveCart characterData={personage8} setCardActive={setCardActive} />
      ) : (
        <HiddenCart setCardActive={setCardActive} />
      )}
    </MainStyled>
  );
}

export default Main;
