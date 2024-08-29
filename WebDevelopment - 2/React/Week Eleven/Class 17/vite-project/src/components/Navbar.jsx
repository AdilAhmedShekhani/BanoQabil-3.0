// Using Context API In Components

import User from "../context/context";
import { useContext } from "react";

function Navbar() {
  const user = useContext(User);
  //   console.log(user)
  return (
    <div>
      <h1>{user[0]}</h1>
      <button onClick={() => user[1]("BanoQabil")}>Update</button>
    </div>
  );
}

export default Navbar;
