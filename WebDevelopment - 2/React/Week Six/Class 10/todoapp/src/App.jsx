//Using React Icons

//First Install (npm install react-icons in CMD)

// import { FcAbout } from "react-icons/fc";
// import { FaAllergies } from "react-icons/fa";

// import { SCHOOL_NAME, STUDENT } from "./utils/constants";

// import * as constants from "./utils/constants";

function App() {
  //Maping of Array (List Rendering)
  // const arr = ["One", "Two", "Three"];

  //Maping of object (List Rendering)
  // const arr = [{ text: "One" }, { text: "Two" }, { text: "Three" }];

  //Conditional Rendering
  // const obj = { name: "" };
  // const loader = false;

  //console.log(constants)

  return (
    <>
      {/* {arr} */}

      {/* <ul>
        {arr.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul> */}

      {/* <ul>
        {arr.map((v, i) => (
          <li key={i}>{v.text}</li>
        ))}
      </ul> */}

      {/* <h1>{obj.name || "Not Available"}</h1> */}
      {/* {loader ? <h1>Loading</h1> : <h1>Welcome</h1>} */}

      {/* <div>
        <FcAbout />
        <FaAllergies />
      </div> */}

      {/* <div>
        <h1>{SCHOOL_NAME}</h1>
        <h1>{STUDENT}</h1>
      </div> */}
    </>
  );
}

export default App;
