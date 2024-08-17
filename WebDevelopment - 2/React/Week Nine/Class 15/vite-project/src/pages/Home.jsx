import { useEffect, useState } from "react";
import Links from "../components/NavLink/Navlink";

function Home() {
  const [user, setUser] = useState({});
  useEffect(() => {
    let userData = localStorage.getItem("user")
    setUser(JSON.parse(userData))
  }, []);
  return (
    <div>
      <h1>Home ({user?.email})</h1>
      <Links />
    </div>
  );
}

export default Home;
