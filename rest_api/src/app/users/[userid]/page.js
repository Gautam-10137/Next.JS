"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function User({params}){
    const router=useRouter();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    
    
    useEffect(()=>{
        async function getUser(id){
            let res= await fetch("http://localhost:3000/api/users/"+id,{cache:"no-store"});
            res= await res.json();
            const user=res.result;
            setName( user.name);
            setEmail( user.email);  
        }
        const id=params.userid;
        getUser(id);
    },[]);
    

    const handleUpdate=async ()=>{
       let res=await fetch("http://localhost:3000/api/users/"+params.userid,{
        method:"put",
        body:JSON.stringify({name,email})
       });
       res=await res.json();
       if(res.success){
          router.push("/users"); 
       }
    }

    return(
        <div className="text-center">
            <div className="text-xl font-semibold ">User Detail for {name}:</div>
            <div><span className="text-l font-semibold mr-4">Name:</span><input type="text" className="border-2  text-center mt-4 mb-4" value={name} onChange={(e)=>setName(e.target.value)}></input></div>
           <div><span className="text-l font-semibold mr-4">Email:</span> <input type="text" className="border-2 text-center " value={email} onChange={(e)=>setEmail(e.target.value)}></input></div>
           <button className="border-2 bg-gradient-to-r from-green-300 to-teal-200 rounded-lg shadow-md w-32 mt-10 hover:scale-105 transition:all duration-300 ease-in-out  " onClick={handleUpdate}>Update</button>
        </div>
    )
}