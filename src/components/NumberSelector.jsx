import React, { useState } from "react";

function NumberSelector() {
  const numArr = [1, 2, 3, 4, 5, 6];
  const [selectNumber, setSelectNumber] = useState();
  console.log(selectNumber);
  return (
    <div className="NumberSelector">
      <div className="numbers">
        {numArr.map((value, index) => (
          <div
            className="box"
            isSelected={value === selectNumber}
            style={{
              backgroundColor: value === selectNumber ? "#000" : "#fff",
              color: value === selectNumber ? "#fff" : "#000",
            }}
            key={index}
            onClick={() => {
              setSelectNumber(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="numbers-text">
        <p>Select Number</p>
      </div>
    </div>
  );
}

export default NumberSelector;
