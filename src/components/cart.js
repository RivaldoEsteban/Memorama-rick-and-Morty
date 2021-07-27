import React, { useState } from "react";
import styled from "styled-components";
import HiddenCart from "./hidden-card";
import ActiveCart from "./active-cart";
const CartStyled = styled.div``;

function Cart({ character, playActions, setPlayActions }) {
  const [activeCart, setActiveCart] = useState(false);

  return (
    <CartStyled>
      {activeCart ? (
        <ActiveCart
          setActiveCart={setActiveCart}
          character={character}
          setPlayActions={setPlayActions}
          playActions={playActions}
        />
      ) : (
        <HiddenCart
          setActiveCart={setActiveCart}
          character={character}
          setPlayActions={setPlayActions}
          playActions={playActions}
        />
      )}
    </CartStyled>
  );
}

export default Cart;
