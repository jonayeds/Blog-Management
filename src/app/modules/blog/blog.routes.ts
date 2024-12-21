import express from "express"
import { requestValidator } from "../../middleware/requestValidator"
import { BlogValidations } from "./blog.validation"
import { BlogControllers } from "./blog.controller"
import { auth } from "../../middleware/auth"

const router = express.Router()

router.post("/create-blog", auth() ,requestValidator(BlogValidations.createBlogValidationSchema), BlogControllers.createBlog)
router.get("/", BlogControllers.getAllBlogs)
router.patch("/:id",auth(), requestValidator(BlogValidations.updateBlogValidationSchema), BlogControllers.updateABlog)
router.delete("/:id",auth(), BlogControllers.deleteABlog)

export const BlogRoutes = router