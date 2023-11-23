import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

function GamePlay() {
  return (
    <>
      <div className="top-section">
        <div className="score-section">
          <TotalScore />
        </div>
        <NumberSelector />
      </div>
      <RoleDice />
    </>
  );
}

export default GamePlay;
