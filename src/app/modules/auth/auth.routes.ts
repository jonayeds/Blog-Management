import express from "express"
import { requestValidator } from "../../middleware/requestValidator"
import { AuthValidations } from "./auth.validation"
import { AuthControllers } from "./auth.controller"

const router = express.Router()

router.post("/login", requestValidator(AuthValidations.loginValidationSchema), AuthControllers.loginUser)

export const AuthRoutes = router