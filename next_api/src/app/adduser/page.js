"use client"

import { useState } from "react";

export default function AddUser(){
    
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");

    const addUser=async ()=>{
       let response=await fetch("http://localhost:3000/api/user",{
        method:"POST",
        body:JSON.stringify({name,age,email})
       });
       response=await response.json();
       if(response.success){
        alert("new user created");
        console.log(response.result);
       }
       else{
        alert("error with som details");
       }
    }

    return(
        <div>
            <h2>Add new user:</h2>
            <input type="text" placeholder="Enter name"  onChange={(e)=>{setName(e.target.value)}}></input>
            <input type="text" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type="text" placeholder="Enter age"  onChange={(e)=>{setAge(e.target.value)}}></input>
            <button onClick={addUser}>ADD</button>
        </div>
    );
}