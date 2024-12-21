import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

const blockAUser = catchAsync(async(req, res)=>{
    const {userId} = req.params
    const result  = await AdminServices.blockAUserFromDB(userId)
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Successfully blocked user",
        data:result
    })
})

export const AdminControllers = {
    blockAUser
}