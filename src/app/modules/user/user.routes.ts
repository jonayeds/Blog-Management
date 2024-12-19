import express from "express"
import { requestValidator } from "../../middleware/requestValidator"
import { UserValidations } from "./user.validation"

const router = express.Router()

router.post("/create-user", requestValidator(UserValidations.createUserValidationSchema), )