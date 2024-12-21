import { z } from "zod";
import { UserRole } from "./user.constant";

const registerUserValidationSchema = z.object({
    body:z.object({
        name:z.string(),
        email:z.string().email(),
        password:z.string().min(6),
        role:z.enum(UserRole as [string]).optional(),
        isBlocked:z.boolean().optional(),
    })
})

export const UserValidations = {
    registerUserValidationSchema
}