import React from "react";

const StartGame = (props) => {
  return (
    <>
      <div className="container">
        <div className="home-images">
          <img src="/images/dices.png" alt="dices" />
        </div>
        <div className="home-textArea">
          <h1>DICE GAME</h1>
          <button className="button" onClick={props.togglePage}>
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
