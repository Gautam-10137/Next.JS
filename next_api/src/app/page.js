"use client"

import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter();
  return (
   <div>
    <h2>Home page</h2>
    <button onClick={()=>{router.push('/login')}}>Login</button>
   </div>
  );
}
