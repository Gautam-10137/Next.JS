"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>router.push("/login")}>Login</button><br/>
      <button onClick={()=>router.push("/about")}> About</button><br/>
      <button onClick={()=>{router.push("/study")}}>Study</button><br/>
      <button onClick={()=>{router.push("/studentlist")}}>StudentList</button>
    </div>
  );
}
