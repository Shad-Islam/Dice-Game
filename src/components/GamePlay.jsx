import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";

function GamePlay() {
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  return (
    <>
      <div className="top-section">
        <div className="score-section">
          <TotalScore />
        </div>
        <NumberSelector
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} />
    </>
  );
}

export default GamePlay;
