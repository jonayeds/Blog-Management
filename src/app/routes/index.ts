import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { BlogRoutes } from "../modules/blog/blog.routes";

export const router = Router()
const moduleRoutes = [
    {
        path:"/user",
        route:UserRoutes
    },
    {
        path:"/blog",
        route:BlogRoutes
    },
]

moduleRoutes.forEach(route=>router.use(route.path, route.route))