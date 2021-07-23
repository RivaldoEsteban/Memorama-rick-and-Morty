import React from "react";
import styled from "styled-components";

const ActiveCartStyled = styled.div`
  inline-size: 17.5rem;
  block-size: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  > * {
    height: 50%;
    box-sizing: border-box;
  }
  .image-personage {
    object-fit: cover;
    vertical-align: middle;
    width: 100%;
  }
  .information {
    background: white;
    padding: 1rem;
  }
  .information > * {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .information div {
    margin: 0.8rem 0;
  }
  .information div i {
    font-size: 1.4rem;
  }
  .information div p {
    margin: 0;
    font: var(--body1-regular);
  }
  .information h3 {
    font: 700 normal 24px/28px var(--Roboto);
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user {
    background: #f4ed1f;
    border-radius: 50%;
    padding: 5px;
  }
  .status {
    background: #3fcd65;
    border-radius: 50%;
    padding: 5px;
  }
  .point {
    background: #00afc7;
    border-radius: 50%;
    padding: 5px;
  }
  button {
    position: absolute;
    top: 15px;
    left: 15px;
    height: 25px;
    background: #202020;
    color: white;
    border-radius: 0.5rem;
    border: none;
    text-transform: uppercase;
    font-family: var(--Roboto);
  }
`;

function ActiveCart({ characterData, setCardActive }) {
  console.log(characterData[0]);
  function handleCard() {
    setCardActive(false);
  }
  return (
    <ActiveCartStyled
      className="animate__animated animate__flipInY"
      onClick={handleCard}
    >
      <button>{characterData[0].species}</button>
      <img className="image-personage" src={characterData[0].image} alt="" />
      <div className="information">
        <h3>{characterData[0].name}</h3>
        <div>
          <i className="icon-user user"></i>
          <p>{characterData[0].gender}</p>
        </div>
        <div>
          <i className="icon-status status"></i>
          <p>{characterData[0].status}</p>
        </div>
        <div>
          <i className="icon-point point"></i>
          <p>{characterData[0].origin.name}</p>
        </div>
      </div>
    </ActiveCartStyled>
  );
}

export default ActiveCart;
