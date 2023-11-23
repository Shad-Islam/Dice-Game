import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

function GamePlay() {
  return (
    <>
      <div className="top-section">
        <div className="score-section">
          <TotalScore />
        </div>
        <NumberSelector />
      </div>
    </>
  );
}

export default GamePlay;
