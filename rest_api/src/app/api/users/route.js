import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(){
   try{

    await mongoose.connect(connectionStr);
    const data= await User.find();

    
    return NextResponse.json({users:data},{status:200});

   }catch(err){
    console.error("Error fetching details: "+err.message);
    return NextResponse.json({result:"false"});
   }
}

export async function POST(request){
   try{
      const payload=await request.json();
      console.log(payload);
      await mongoose.connect(connectionStr);
      const newUser=new User(payload)
      await newUser.save();
      return NextResponse.json({result:newUser,success:true});

   }catch(err){
      console.error("Error adding new user: "+err.message);
      return NextResponse.json({result:"Invalid user details entered",success:false});
   }
}