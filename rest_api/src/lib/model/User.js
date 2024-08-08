import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    name:String,
    email:String
});

export const User=mongoose.models.Users || mongoose.model("Users",userSchema);