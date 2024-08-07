import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CAR from "./assets/car.jpg";
import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";


const Button = () => <button>Click Me</button>

// function Header() {
//   return (
//     <div>
//       <h1>Header</h1>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   );
// }

function App() {
  let fullName = "Adil Ahmed"
const abc = () => {
  console.log("Hello Students")
}

// const obj = {name: "Adil Ahmed Shekhani"}
const obj = {name: ""}
const loader = true
  return (
    <>
    {loader ? <h1>Loading ...</h1>:<h1>Website</h1>}
      <Header />
      {obj.name}
      <h1>{obj.name || "Not Available"}</h1>
      <h1>{obj.name ? obj.name : "Not Available"}</h1>

      
      {/* {alert("Hello")} */}
      {/* <Button/> */}
<button onClick={abc}>Click</button>
      <h1>{fullName}</h1>
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
      <Footer />
    </>
  );
}

export default App;
