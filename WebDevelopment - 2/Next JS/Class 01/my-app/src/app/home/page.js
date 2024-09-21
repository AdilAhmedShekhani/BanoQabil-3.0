"use client";

import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/shop"}>Shop</Link>
    </div>
  );
}

export default Home;
