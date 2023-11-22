import React from "react";

const StartGame = () => {
  return (
    <>
      <div className="container">
        <div className="home-images">
          <img src="/images/dices.png" alt="dices" />
        </div>
        <div className="home-textArea">
          <h1>DICE GAME</h1>
          <button className="button">Play Now</button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
