"use client"
export default function Delete({id}){

    const handleDelete=async ()=>{
       let response=await fetch(`http://localhost:3000/api/user/${id}`,{
        method:"delete"
       });
       response=await response.json();
       if(response.success){
        alert(`user with id ${id} is deleted successfully`);
       }
       else{
        alert("client error while deleting user");
       }
    }

    return <button onClick={handleDelete}>Delete</button>
}