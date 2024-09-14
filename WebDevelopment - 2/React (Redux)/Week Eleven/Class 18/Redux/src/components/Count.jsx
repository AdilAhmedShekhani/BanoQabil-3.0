import React from "react";
// Useselector hook for retrive(read) value;
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
