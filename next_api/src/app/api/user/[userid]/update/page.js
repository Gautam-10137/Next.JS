"use client"
import { useEffect, useState } from "react"

export default function Update({params}){

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const id=params.userid;


    useEffect(()=>{
        const fetchDetails=async()=>{
        let response=await fetch(`http://localhost:3000/api/user/${id}`);
        response=await response.json();
        console.log(response);
        setAge(response.age);
        setEmail(response.email);
        setName(response.name);
        }
        fetchDetails();
    },[id]);

    const updateUser=async()=>{
        // update in db
        let response=await fetch(`http://localhost:3000/api/user/${id}`,{
            method:"PUT",
            body:JSON.stringify({name,email,age})
        });
        response=await response.json();
        if(response.success){
            alert("User detail updated successfully");
        }
        else{
            alert("Invalid details entered");
        }
     
    }

    return (
        <div>
             <h2>Updating user details:</h2>

             <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}></input>
             <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
             <input type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)}></input>

             <button onClick={updateUser}>Update</button>

        </div>
    )
}