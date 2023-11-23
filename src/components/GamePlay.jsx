import { useState } from "react";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState(undefined);
  const [currentDice, setCurrentDice] = useState(1);

  let rendomNumber = () => {
    if (!selectNumber) {
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
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} rendomNumber={rendomNumber} />
    </>
  );
}

export default GamePlay;
