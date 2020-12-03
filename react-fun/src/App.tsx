import React, { Dispatch, SetStateAction, useEffect} from "react";
import "./App.css";

export interface IApp {
  handleAdd(): void;
  handleDecrease(): void;
  minutes: number;
  error: null | string;
}

interface IState<T> {
  value ?:T ,
  setValue ?: () => void
}

let states:any[][] = []  ;
let calls = -1  ;

export function useState<T>(defaultValue : T) {
  let callId = ++calls

  if (states[callId]) {
    return states[callId];
  }

  let setValue = (newVal:T):void => {
    states[callId][0] = newVal
    // rerender
  }

  let res = [defaultValue, setValue]  ;
  states[callId] = res;
  return states[callId];
}

export function useNumberChange(): IApp {
  const [minutes, setMinutes] = useState<number>(5);
  const [error, setError] = useState<string | null>(null);


  const handleAdd = (): void => {
    if (minutes < 10) {
      setMinutes(minutes + 1);
    } else {
      setError("Less than should be");
    }
  };

  const handleDecrease = (): void => {
    setMinutes(minutes - 1);
  };

  useEffect(() => {
    if (minutes < 10) {
      setError(null);
    }
  }, [minutes]);


  return {
    handleDecrease,
    handleAdd,
    error,
    minutes,
  };
}

export function App() {
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




export function AnotherApp() {
  const { minutes, error, handleAdd, handleDecrease } = useNumberChange();

  return (
    <div className="App">
      <p> seconds : {minutes}</p>

      <div>{error && <strong>{error}</strong>}</div>

      <button onClick={handleAdd}> + </button>
      <button onClick={handleDecrease}> - </button>
    </div>
  );
}

