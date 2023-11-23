import React from "react";

function NumberSelector(props) {
  const numArr = [1, 2, 3, 4, 5, 6];

  const numberSelectHandler = (value) => {
    props.setSelectNumber(value);
    props.setError("");
  };

  console.log(props.selectNumber);
  return (
    <div className="NumberSelector">
      <p>{props.error}</p>
      <div className="numbers">
        {numArr.map((value, index) => (
          <div
            className="box"
            isSelected={value === props.selectNumber}
            style={{
              backgroundColor: value === props.selectNumber ? "#000" : "#fff",
              color: value === props.selectNumber ? "#fff" : "#000",
            }}
            key={index}
            onClick={() => {
              numberSelectHandler(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="numbers-text-bottom">
        <p>Select Number</p>
      </div>
    </div>
  );
}

export default NumberSelector;
