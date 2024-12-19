import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res)=>{
    const user = req.body
    const result = await UserServices.createUserIntoDB(user)
    sendResponse(res, {
        success:true,
        message:"Successfully created User",
        statusCode:200,
        data:result
    })
})

export const UserControllers = {
    createUser
}