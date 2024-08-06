import { NextResponse } from "next/server";
import {users} from "@/util/userDb";
export function GET(request,content){
   console.log(users);
    return NextResponse.json({users},{status:200});
}

export async function POST(request){
    const payload=await request.json();
   
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result:"require field not found",success:false},{status:400});
    }

    return NextResponse.json({result:"New user created",success:true},{status:200});
}