import { useState } from "react";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Buttons from "./Buttons";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  let rendomNumber = () => {
    if (!selectNumber) {
      setError(
        <p className="numbers-text-top">You have not selected any number</p>
      );
      return;
    }

    let num = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(num);

    if (selectNumber === num) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
  };

  return (
    <>
      <div className="top-section">
        <div className="score-section">
          <TotalScore score={score} />
        </div>
        <NumberSelector
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} rendomNumber={rendomNumber} />
      <Buttons setScore={setScore} setCurrentDice={setCurrentDice} />
    </>
  );
}

export default GamePlay;
