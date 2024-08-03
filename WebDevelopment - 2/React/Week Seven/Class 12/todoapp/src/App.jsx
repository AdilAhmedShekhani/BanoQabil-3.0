import Button from "./components/Button/button";
// Using AntDesign
import { QRCode } from "antd";
import Login from "./components/Login/login";
import { useState } from "react";
function App() {
  const [name, setName] = useState("Adil");
  const [todos, setTodos] = useState(["Test1", "Test2"]);
  const [value, steValue] = useState("");
  return (
    <>
      {/* <div>
        <Button /> */}
      {/* Using Ant Design */}
      {/* <QRCode color="Blue" value={"https://banoqabil.pk/"} /> */}

      {/* Form Using AntDesign (Styling From BootStrap) */}

      {/* <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-8 col-lg-6">
              <Login />
            </div>
          </div>
        </div>
      </div> */}

      {/* TODO APP */}
      <div>
        <h1>Todo App</h1>
        {/* <h1>{name}</h1>
        <button onClick={() => setName("Ahmed")}>Update</button> */}

        <ul>
          {todos.map((v, i) => (
            <li key={i}>{v}</li>
          ))}

          {/* Data Binding (OneWay) */}
          {/* <h1>{value}</h1> */}

          {/* TwoWay DataBinding */}

          <input
            type="text"
            value={value}
            onChange={(e) => steValue(e.target.value)}
          />
          <button
            onClick={() => {
              setTodos([...todos, value]);
              steValue("");
            }}
          >
            Add todo
          </button>
        </ul>
      </div>
    </>
  );
}

export default App;
