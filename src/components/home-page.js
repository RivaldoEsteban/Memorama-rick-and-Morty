import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Main from "./main";
import CorrectSelectionStyled from "./correct-selection";
import IncorrectSelect from "./incorrect-select";

const HomePageStyled = styled.div`
  padding: 20px;
  width: inherit;
  height: inherit;
  box-sizing: border-box;
`;

function HomePage() {
  return (
    <HomePageStyled>
      <CorrectSelectionStyled />
      <IncorrectSelect />
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
