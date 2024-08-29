import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./context/context";
import Navbar from "./components/Navbar";

function App() {
  // const name = "Adil Ahmed";

  const [name, setName] = useState("Adil");

  return (
    <>
    {/* Value in Single only but you you can pass through array or object */}
      <User.Provider value={[name , setName]}>
        <Navbar />
        <h1>Hello</h1>
      </User.Provider>
    </>
  );
}

export default App;
