import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import { UserRole } from "./user.constant";
import bcrypt from "bcrypt"
import config from "../../config";

const userSchema =new Schema<IUser>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:UserRole,
        default:"user"
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

// hashing password before creating a user
userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,Number(config.salt_rounds))
    next()
})

export const User = model<IUser>("User", userSchema)