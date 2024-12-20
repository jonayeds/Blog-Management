import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async(payload:IUser)=>{
    const result = await User.create(payload)
    result.password = ""
    return result
}

export const UserServices = {
    createUserIntoDB
}