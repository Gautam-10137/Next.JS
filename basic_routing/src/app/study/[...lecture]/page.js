"use client"

import { useRouter } from "next/navigation"

export default function Lectures({params}){
    const router=useRouter();
    return (
        <div>
           <h1>Day :{params.lecture[0]} </h1> <br/>
           <h1>Lecture: {params.lecture[1]}</h1>
           <button onClick={()=>{router.push("/")}}>Home</button>

        </div>
    )
}