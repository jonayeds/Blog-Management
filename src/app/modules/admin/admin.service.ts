import { User } from "../user/user.model"

const blockAUserFromDB = async(id:string)=>{
    const result = await User.findByIdAndUpdate(id,{isBlocked:true},{new:true})
    return result
}
export const AdminServices = {
    blockAUserFromDB
}