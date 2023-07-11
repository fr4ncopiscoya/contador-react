import "./App.css";
import Button from "./components/Button";
import Contador from "./components/Contador";
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const click = () => {
    setNumClicks(numClicks + 1);
  }

  const restart = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className="logo-container">
        <img src={freeCodeCampLogo} alt="" className="logo" />
        <div className="main-container">
          <Contador
            numClicks={numClicks}
          />

          <Button
            text='Click'
            btnaction={true}
            click={click} />

          <Button
            text='Restart'
            btnaction={false}
            click={restart} />
        </div>
      </div>
    </div>
  );
}

export default App;
