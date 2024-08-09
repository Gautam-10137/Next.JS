import { connectionStr } from "@/lib/db";
import { User } from "@/lib/model/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const userid=params.id;
    
    await mongoose.connect(connectionStr);

    const userD=await User.findById({_id:userid});
    if( userid && userD){
       return NextResponse.json({result:userD,success:true},{status:200});
    }
    return NextResponse.json({result:"Invalid user details",success:false},{status:400});
}

export async function PUT(request,{params}){
    const id=params.id;
    const payload=await request.json();
    await mongoose.connect(connectionStr);

    const userUpdated= await User.findByIdAndUpdate({_id:id},payload);
    if(userUpdated){
        return NextResponse.json({result:"User updated successfully",success:true},{status:200});
    }
    return NextResponse.json({result:"Invalid user",success:false},{status:200});
}

export async function DELETE(request,{params}){
    const id=params.id;
    await mongoose.connect(connectionStr);

    const userDeleted= await User.findByIdAndDelete({_id:id});
    if(userDeleted){
        return NextResponse.json({result:"User Deleted Successfully",success:true},{status:200});    
    }
    return NextResponse.json({result:"Invalid User",success:false},{status:400});
}   