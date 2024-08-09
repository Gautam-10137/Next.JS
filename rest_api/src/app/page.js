"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div>
      <div className="text-2xl text-zinc-800 font-bold text-center">
        User Database
      </div>
      <button onClick={()=>router.push("users")} className="text-2xl font-semibold text-blue-700 hover:w-fit transition-all duration-300 ease-in-out ml-8 w-fit bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl">
        Show Users
      </button>
      <button onClick={()=>router.push("users/create")} className="text-2xl font-semibold text-blue-700 hover:w-fit transition-all duration-300 ease-in-out ml-8 w-fit bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl">
        Create User
      </button>
    </div>
  );
}
