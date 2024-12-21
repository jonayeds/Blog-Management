import { AppError } from "../../errors/appError";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";

const loginUser = async(payload:ILoginUser) =>{
    // checking if the user exists
    const isUserExist =await User.isUserExists(payload.email)
    if(!isUserExist){
        throw new AppError(404, "User not found")
    }
    if(isUserExist?.isBlocked){
        throw new AppError(403, "User is Blocked")
    }
    // ckecking password
    const isPasswordMached = await User.isPasswordCorrect(payload.password, isUserExist.password)
    if(!isPasswordMached){
        throw new AppError(401, "Invalid Credentials")
    }
    // send Access and Refresh token
    
    return {isPasswordMached}
}


export const AuthServices = {
    loginUser
}