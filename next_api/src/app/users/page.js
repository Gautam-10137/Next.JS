import Link from "next/link";

async function getUsers(){
    const data=await fetch("http://localhost:3000/api/user");
    const result=await data.json();
    console.log(typeof(result));
    return result.users;
}


export default async function Users(){
   const users=await getUsers();
   
    return(
     <div>
        <h2>All Users:</h2>
        {users.map((item)=>(
            <div>
               <Link href={`/users/${item.id}`}>{item.name}</Link>
            </div>
        ))
        }
     </div>
    );
}