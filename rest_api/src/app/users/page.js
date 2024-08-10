"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";




export default function Users() {

  const [users,setUsers]=useState([]);
  const router=useRouter();
  useEffect(()=>{
     fetchUsers();
  },[]);
  
  const handleDelete=async(id)=>{
      
      let res=await fetch("http://localhost:3000/api/users/"+id,{
          method:"delete"
      });
      res=await res.json();
      if(res.success){
       
          fetchUsers();
      }
      else{
          alert("Error while deleting");
      }
  }
  async function fetchUsers(){
   let res = await fetch("http://localhost:3000/api/users", { 
      cache:'no-store'
    },
   );
   res = await res.json();
   setUsers(res.users);
   }
    
    return (
      <>
        <h2 className="font-bold text-2xl">All Users:</h2>
        {users.length > 0? users.map((user, idx) => (
          <div className="m-4" key={idx}>
            <span className="font-bold">Name:</span> {user.name}
            <span className="font-bold mx-4">Email:</span> {user.email}
            <Link className="mx-4 text-sky-600" href={`/users/${user._id}`}>Edit</Link>
            <button className=" bg-slate-500 w-28 border-2 font-medium" onClick={()=>{handleDelete(user._id)}}>Delete</button>
          </div>
        )):<div className="text-xl font-medium text-center">Fetching Users from DB</div>}
        <Link className="border-2 w-28 text-xl bg-gradient-to-r from-emerald-300 to-cyan-300 ml-10" href="/">Home</Link>
      </>
    );
}
