import { NextResponse } from "next/server";
import {users} from "@/util/userDb";
export async function GET(request,{params}){
    const user=users.filter((item)=>item.id==params.userid);
    console.log(user);

    return NextResponse.json(user[0]);
}

export async function PUT(request,{params}){
   
    const payload=await request.json();
 
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"invalid details entered",success:false},{status:400});
    }

    return NextResponse.json({result:"user detail updated",success:true},{status:200});
}