import React, { useState } from "react";

function RoleDice() {
  const [currentDice, setCurrentDice] = useState(1);

  let rendomNumber = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    return setCurrentDice(num);
  };
  console.log(currentDice);

  return (
    <div div className="role-dice">
      <div className="dice" onClick={() => rendomNumber()}>
        <img src={`./images/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
}

export default RoleDice;
