import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import { UserRole } from "./user.constant";


const userSchema =new Schema<IUser>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:UserRole,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

export const User = model<IUser>("User", userSchema)