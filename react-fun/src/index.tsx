import React, { Dispatch, SetStateAction, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

export interface IApp {
  handleAdd(): void;
  handleDecrease(): void;
  minutes: number;
  error: null | string;
}

interface IState<T> {
  value?: T;
  setValue?: void;
}

let states: any[][] = [];
let calls = -1;

function useState<T>(defaultValue: T) {
  let callId = ++calls;

  if (states[callId]) {
    return states[callId];
  }

  let setValue = (newVal: T): void => {
    states[callId][0] = newVal;
    render();
  };

  let res = [defaultValue, setValue];
  states[callId] = res;
  return states[callId];
}

function useNumberChange(): IApp {
  const [minutes, setMinutes] = useState<number>(5);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = (): void => {
    if (minutes < 10) {
      setError(null);
      setMinutes(minutes + 1);
    } else {
      setError("Less than should be");
    }
  };

  const handleDecrease = (): void => {
    if (minutes > 0) {
      setError(null);
      setMinutes(minutes - 1);
    } else {
      setError("More than 0  should be");
    }
  };


  return {
    handleDecrease,
    handleAdd,
    error,
    minutes,
  };
}

function App() {
  const { minutes, error, handleAdd, handleDecrease } = useNumberChange();
  return (
    <div className="App">
      <p> minutes : {minutes}</p>

      <button onClick={handleAdd}> + </button>
      <button onClick={handleDecrease}> - </button>

      <div>{error && <strong>{error}</strong>}</div>
    </div>
  );
}

//function AnotherApp() {
  //const { minutes, error, handleAdd, handleDecrease } = useNumberChange();

  //return (
    //<div className="App">
      //<p> seconds : {minutes}</p>

      //<div>{error && <strong>{error}</strong>}</div>

      //<button onClick={handleAdd}> + </button>
      //<button onClick={handleDecrease}> - </button>
    //</div>
  //);
//}

function render() {
  calls = -1 ;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

render();
