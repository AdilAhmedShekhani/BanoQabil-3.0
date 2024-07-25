//PROPS PASS
// export function Button(props) {
//   console.log(props);
//   return <button>Click</button>;
// }

//PROPS WITH DESTRUCTURING
export function Button({ value, color }) {
  return <button style={{ color: color || "black" }}>{value}</button>;
}
