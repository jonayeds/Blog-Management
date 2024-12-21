import express from "express"
import { AdminControllers } from "./admin.controller"
import { BlogControllers } from "../blog/blog.controller"
import { auth } from "../../middleware/auth"

const router = express.Router()

// Block a user
router.patch("/users/:userId/block", auth(), AdminControllers.blockAUser)

// Delete a blog
router.delete("/blogs/:id",auth(), BlogControllers.deleteABlog)

export const AdminRoutes = router