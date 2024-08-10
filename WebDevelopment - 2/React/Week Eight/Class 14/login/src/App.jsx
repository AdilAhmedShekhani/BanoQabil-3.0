import { useState } from "react";

import Login from "./pages/Login";

function App() {
  let [counter, setCounter] = useState(10);

  //Let counter = 10

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Value {counter}</h1>

      <button onClick={addValue}>Add Value {counter}</button>

      <br />

      <button onClick={removeValue}>Remove Value {counter}</button>
      <p> Footer : {counter}</p>
    </>
  );
}

export default App;
