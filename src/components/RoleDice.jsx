import React from "react";

function RoleDice(props) {
  let rendomNumber = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    return props.setCurrentDice(num);
  };
  console.log(props.currentDice);

  return (
    <div div className="role-dice">
      <div className="dice" onClick={() => rendomNumber()}>
        <img src={`./images/dice_${props.currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
}

export default RoleDice;
