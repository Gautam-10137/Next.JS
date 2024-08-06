async function getUserDetail(id){
    const data= await fetch("http://localhost:3000/api/user");
    const result=await data.json();
    return result.users.filter((item)=>item.id==id)[0];
}

export default async function Detail({params}){
   
   const user=await getUserDetail(params.detail);

    return(
        <div>
           User Detail:
           <h2>Name:  {user.name} </h2> 

           <h3>Email:  {user.email}</h3>
        </div>
    )
}