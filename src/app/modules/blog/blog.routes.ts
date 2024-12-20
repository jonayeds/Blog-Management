import express from "express"
import { requestValidator } from "../../middleware/requestValidator"
import { BlogValidations } from "./blog.validation"
import { BlogControllers } from "./blog.controller"

const router = express.Router()

router.post("/create-blog", requestValidator(BlogValidations.createBlogValidationSchema), BlogControllers.createBlog)
