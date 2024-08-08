import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(){
   try{
    console.log(connectionStr);
    await mongoose.connect(connectionStr);
    const data= await User.find();

    
    return NextResponse.json({users:data},{status:200});

   }catch(err){
    console.error("Error fetching details: "+err.message);
    return NextResponse.json({result:"false"});
   }
}