import "./App.css";
import Counter from "./components/Count";

// usedipatch hook for using dispatch action
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      {/* After using Dispatch the value update in store increment when click  */}
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </>
  );
}

export default App;
