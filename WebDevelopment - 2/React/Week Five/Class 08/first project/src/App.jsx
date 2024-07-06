import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CAR from "./assets/car.jpg";
import "./App.css";

function App() {
  return (
    <>
      {/* {alert("Hello")} */}
      <h1 style={{ color: "blue", backgroundColor: "#000", padding: 30 }}>
        Hello Students{" "}
      </h1>
      <br />
      <h1 className="head2">Hello Students 1</h1>
      <img src={CAR} alt="" />
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*"
        alt=""
      />
    </>
  );
}

export default App;
