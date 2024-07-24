"use client"

import { useRouter } from "next/navigation"

export default function Login(){
    const router=useRouter();
    return(
        <div>
            <h1>Login page</h1>
            <button onClick={()=>{router.push("/")}}>Home Page</button>
        </div>
    )
}