import express from "express"
import { requestValidator } from "../../middleware/requestValidator"
import { AuthValidations } from "./auth.validation"
import { AuthControllers } from "./auth.controller"
import { UserValidations } from "../user/user.validation"
import { UserControllers } from "../user/user.controller"

const router = express.Router()

router.post("/login", requestValidator(AuthValidations.loginValidationSchema), AuthControllers.loginUser)
router.post("/register", requestValidator(UserValidations.registerUserValidationSchema), UserControllers.createUser)


export const AuthRoutes = router