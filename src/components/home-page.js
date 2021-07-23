import React from "react";
import styled from "styled-components";
import Header from "./header";
import Main from "./main";

const HomePageStyled = styled.div`
  padding: 20px;
  width: inherit;
  height: inherit;
  box-sizing: border-box;
`;

function HomePage() {
  return (
    <HomePageStyled>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
