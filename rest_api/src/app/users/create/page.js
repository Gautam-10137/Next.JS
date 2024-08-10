"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Create(){
    const router=useRouter();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const handleAdd=async()=>{
        let response=await fetch("http://localhost:3000/api/users",{
            method:"post",
            body:JSON.stringify({name,email})
        });
        response=await response.json();
        if(response.success){

            router.refresh();
             router.push("/users");
        }
        else{
            console.log("Invalid details entered");
        }
    }
    return(
        <>
        <h2 className="text-2xl font-bold">Create New User:</h2>
        <input className="border-2 mx-4" type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
        <input className="border-2 mx-4" type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input>
        <button className="border-2 bg-gradient-to-r from-green-300 to-teal-200 font-medium text-pink-800 rounded-lg w-20 hover:scale-105  transition:all duration:300 ease-in-out " onClick={handleAdd}>Add</button>
        </>
    )
}