import Delete from "@/lib/Delete";
import Link from "next/link";


async function fetchUsers(){
   let res = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
   res = await res.json();
   return res.users;
}

export default async function Users() {
    const users = await fetchUsers();
    return (
      <>
        <h2 className="font-bold text-2xl">All Users:</h2>
        {users.length > 0 && users.map((user, idx) => (
          <div className="m-4" key={idx}>
            <span className="font-bold">Name:</span> {user.name}
            <span className="font-bold mx-4">Email:</span> {user.email}
            <Link className="mx-4 text-sky-600" href={`/users/${user._id}`}>Edit</Link>
            <Delete id={user._id}/>
          </div>
        ))}
      </>
    );
}
