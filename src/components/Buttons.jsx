function Buttons(props) {
  const reset = () => {
    props.setScore(0);
    props.setCurrentDice(1);
  };
  return (
    <div className="buttons">
      <button className="button-outline" onClick={reset}>
        Reset Score
      </button>
      <button>Show Rules</button>
    </div>
  );
}

export default Buttons;
