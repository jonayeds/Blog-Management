import express from "express"
import { AdminControllers } from "./admin.controller"
import { BlogControllers } from "../blog/blog.controller"

const router = express.Router()

// Block a user
router.patch("/users/:userId/block", AdminControllers.blockAUser)

// Delete a blog
router.delete("/blogs/:id", BlogControllers.deleteABlog)

export const AdminRoutes = router