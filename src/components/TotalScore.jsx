import React from "react";

function TotalScore(props) {
  return (
    <>
      <div className="score_section">
        <h1>{props.score}</h1>
        <p>Total Score</p>
      </div>
    </>
  );
}

export default TotalScore;
