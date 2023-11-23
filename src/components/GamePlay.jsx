import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

function GamePlay() {
  return (
    <>
      <div className="score-section">
        <TotalScore />
        <NumberSelector />
      </div>
    </>
  );
}

export default GamePlay;
