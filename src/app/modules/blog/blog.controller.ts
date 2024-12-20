import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async(req, res)=>{
    const blog = req.body
    const result = await BlogServices.createBlogIntoDB(blog)
    sendResponse(res,{
        success:true,
        message:"Successfully created blog",
        data:result,
        statusCode:200
    })
})

export const BlogControllers = {
    createBlog
}