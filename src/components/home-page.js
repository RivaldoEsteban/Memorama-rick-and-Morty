import React from "react";
import styled from "styled-components";
import Header from "./header";
import Main from "./main";
import CorrectSelection from "./correct-selection";
import IncorrectSelect from "./incorrect-select";
import Lose from "./lose";

const HomePageStyled = styled.div`
  padding: 20px;
  width: inherit;
  height: inherit;
  box-sizing: border-box;
`;

function HomePage() {
  return (
    <HomePageStyled>
      <CorrectSelection />
      <IncorrectSelect />
      <Lose />
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
