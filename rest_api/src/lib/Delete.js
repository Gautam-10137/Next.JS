"use client"
import { useRouter } from "next/navigation";

export default function Delete({id}){
    const router=useRouter();
    const handleDelete=async()=>{
        
        let res=await fetch("http://localhost:3000/api/users/"+id,{
            method:"delete"
        });
        res=await res.json();
        if(res.success){
            router.refresh();
        }
        else{
            alert("Error while deleting");
        }
    }
    return <button className=" bg-slate-500 w-28 border-2 font-medium" onClick={handleDelete}>Delete</button>
}