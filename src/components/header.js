import React, { useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../App";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  inline-size: 100%;
  i {
    color: #f4ed1f;
    font-size: 2.5rem;
  }
  .header {
  }
  div {
    display: flex;
    color: var(--white);
    align-items: center;
  }
  p {
    font: var(--headline1);
    margin: 0;
  }
  .points {
    display: flex;
    gap: 5rem;
  }
  @media (max-width: 600px) {
    display: block;
    .points {
      justify-content: space-between;
      gap: 0;
    }
    .logo {
      display: block;
      margin: auto;
    }
  }
`;

function Header() {
  const context = useContext(Context);
  const lives = useRef(null);
  const points = useRef(null);
  useEffect(() => {
    context.ref = { points: points.current, lives: lives.current };
  });
  return (
    <HeaderStyled>
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="logo"
      />
      <div className="points">
        <div>
          <i className="icon-money"></i>
          <p className="animate__animated animate__heartBeat">
            $<b ref={points}>300</b>
          </p>
        </div>
        <div>
          <i className="icon-heart"></i>
          <p className="animate__animated animate__heartBeat">
            x<b ref={lives}>3</b>
          </p>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
