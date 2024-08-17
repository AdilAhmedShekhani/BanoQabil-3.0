import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { useEffect, useState } from "react";

function AppRouter() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const isUser = localStorage.getItem("user");
    if (isUser) {
      setUser(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route
          path="/login"
          element={user ? <Navigate to={"/home"} /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
