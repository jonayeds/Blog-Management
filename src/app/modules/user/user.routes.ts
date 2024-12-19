import express from "express"
import { requestValidator } from "../../middleware/requestValidator"
import { UserValidations } from "./user.validation"
import { UserControllers } from "./user.controller"

const router = express.Router()

router.post("/create-user", requestValidator(UserValidations.createUserValidationSchema), UserControllers.createUser )

export const UserRoutes = router