import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./components/Child/Child";

function App() {
  const [count, setCount] = useState(0);

  const getData = useCallback(()=>{
    return ["one","two"]
  },[])

  return (
    <>
      <Child getData={getData} />
      <h1>{count}</h1>
      <button onClick={() => setCount((oldValue) => oldValue + 1)}>
        Increase
      </button>
      <button
        disabled={count < 1}
        onClick={() => setCount((oldValue) => oldValue - 1)}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
