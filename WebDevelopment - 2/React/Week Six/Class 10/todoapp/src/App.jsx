function App() {
  //Maping of Array (List Rendering)
  const arr = ["One", "Two", "Three"];

  return (
    <>
      {/* {arr} */}
      <ul>
        {arr.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
