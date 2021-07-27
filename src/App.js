import React, { useState, createContext, useEffect } from "react";
import "./style.css";
import getCharacters from "./services/getCharacters";
import StartGameModal from "./components/start-game-modal";
import HomePage from "./components/home-page";
import styled from "styled-components";
import CorrectSelectionStyled from "./components/correct-selection";
const AppStyled = styled.div`
  .wrapper {
    max-width: 1366px;
    margin: auto;
  }
`;
export const Context = createContext();

function App() {
  const [characters, setCharacters] = useState();
  const [play, setPlay] = useState(false);
  const charactersAPI = getCharacters(1, 2, 3, 4, 5, 6, 7, 8);

  useEffect(() => {
    charactersAPI
      .then((character) => {
        setCharacters(character);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [characters]);

  return (
    <Context.Provider
      value={{
        value: characters,
        ref: {},
        setCharacters,
      }}
    >
      <CorrectSelectionStyled />
      <AppStyled id="page">
        {play ? <HomePage /> : <StartGameModal setPlay={setPlay} />}
      </AppStyled>
    </Context.Provider>
  );
}

export default App;
