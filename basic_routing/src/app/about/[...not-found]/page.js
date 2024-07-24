"use client"

import { useRouter } from "next/navigation"

export default function AboutNotFound(){
    const router=useRouter();
    return (
        <div>
             <h1>This About page is not found.</h1>
             <button onClick={()=>{router.push("/")}}>Home</button>
        </div>
    )
}