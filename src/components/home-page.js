import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "./header";
import Main from "./main";
import CorrectSelectionStyled from "./correct-selection";
import IncorrectSelect from "./incorrect-select";
import Win from "./win";
import Lose from "./lose";

const HomePageStyled = styled.div`
  padding: 20px;
  width: inherit;
  height: inherit;
  box-sizing: border-box;
`;

function HomePage() {
  const container = useRef(null);
  const [containerPage, setContainerPage] = useState();
  useEffect(() => {
    setContainerPage(container.current);
  }, [containerPage]);
  return (
    <HomePageStyled>
      <CorrectSelectionStyled containerPage={containerPage} />
      <IncorrectSelect containerPage={containerPage} />
      <Win containerPage={containerPage} />
      <Lose containerPage={containerPage} />
      <div className="wrapper" ref={container}>
        <Header />
        <Main containerPage={containerPage} />
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
