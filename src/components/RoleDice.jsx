import React from "react";

function RoleDice(props) {
  return (
    <div div className="role-dice">
      <div className="dice" onClick={() => props.rendomNumber()}>
        <img src={`./images/dice_${props.currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
}

export default RoleDice;
