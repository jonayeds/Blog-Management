import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async(payload:IBlog)=>{
    const result  = await Blog.create(payload)
    return result 
}

const getAllBlogsFromDB = async(query:Record<string, unknown>)=>{
    const result = await Blog.find().populate("author")
    return result
}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB
}