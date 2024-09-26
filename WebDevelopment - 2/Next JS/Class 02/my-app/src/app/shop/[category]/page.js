"use client";

function Shop(props) {
  return (
    <div>
      <h1> Shop Page</h1>

      <h2>{props.params.category}</h2>
    </div>
  );
}

export default Shop;
