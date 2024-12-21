/* eslint-disable @typescript-eslint/no-explicit-any */
import { JwtPayload } from "jsonwebtoken";
import { QueryBuilder } from "../../builder/queryBuilder";
import { User } from "../user/user.model";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import { Types } from "mongoose";
import { AppError } from "../../errors/appError";

const createBlogIntoDB = async(payload:IBlog)=>{
    const blogObj:Record<string, any> = payload
    const userEmail = blogObj.user.email
    const author = await User.findOne({email:userEmail})
    payload.author = author?._id as Types.ObjectId

    const result  = await Blog.create(payload)
    return result
}

const getAllBlogsFromDB = async(query:Record<string, unknown>)=>{
    const searchTerm = ["title", "content" ]
    const queryBuilder = new QueryBuilder(Blog.find().populate("author"), query)
    .search(searchTerm)
    .filter()
    .sort()
    .paginate()
    .fields()
    const result = await queryBuilder.modelQuery
    return result
}

const updateBlog = async(payload:Partial<IBlog>, id:string, currentUser:JwtPayload) =>{
    const isBlogExist = await Blog.findById(id)
    if(!isBlogExist){
        throw new AppError(404,"Blog not found")
    }
    const author = await User.findById(isBlogExist.author)
    if(author?.email !== currentUser.email){
        throw new AppError(403, "You are not authorized to update blog")
    }

    const result = await Blog.findByIdAndUpdate(id,{content :payload.content, title:payload.title}, {new:true, runValidators:true})
    return result
}

const deleteBlogFromDB = async(id:string, currentUser: JwtPayload) =>{
    const isBlogExist = await Blog.findById(id)
    if(!isBlogExist){
        throw new AppError(404,"Blog not found")
    }
    const author = await User.findById(isBlogExist.author)
    if(currentUser.role !== "admin" &&
        author?.email !== currentUser.email

    ){
        throw new AppError(403, "You are not Authorized to delete the blog")
    }

    const result = await Blog.findByIdAndDelete(id)
    return result

}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    updateBlog,
    deleteBlogFromDB
}