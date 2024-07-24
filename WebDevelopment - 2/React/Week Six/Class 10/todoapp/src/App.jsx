function App() {
  //Maping of Array (List Rendering)
  // const arr = ["One", "Two", "Three"];

  //Maping of object (List Rendering)
  // const arr = [{ text: "One" }, { text: "Two" }, { text: "Three" }];

  //Conditional Rendering
  // const obj = { name: "" };
  // const loader = false;

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
    </>
  );
}

export default App;
