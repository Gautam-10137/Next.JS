const fetchUser=async()=>{
    const res=await fetch('https://dummyjson.com/users');
    const data=await res.json();
    console.log(data);
    return data.users;
}
export default async function Page(){
    const users=await fetchUser();
    return(
        <div>
            <h2>Users:</h2>
            {users.map((user,idx)=>(
                <h2 id={idx}> {user.email} </h2>
            ))}
        </div>
    )
}