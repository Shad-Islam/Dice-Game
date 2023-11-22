import "./App.css";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [page, setPage] = useState(true);

  const togglePage = () => {
    setPage(!page);
  };
  return (
    <div className="App">
      {page ? <GamePlay /> : <StartGame togglePage={togglePage} />}
    </div>
  );
}

export default App;
