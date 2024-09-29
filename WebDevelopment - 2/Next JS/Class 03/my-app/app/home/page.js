"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const login = () => {
    router.push("/shop")
  }
  return (

    <div>
      <h1>
        Home
      </h1>
      <Link href={"/shop"}>shop</Link>
      <br/>
      <button onClick={login}>login</button>
    </div>
  );
}
