import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { BlogRoutes } from "../modules/blog/blog.routes";
import { AdminRoutes } from "../modules/admin/admin.routes";

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
    {
        path:"/admin",
        route:AdminRoutes
    },
]

moduleRoutes.forEach(route=>router.use(route.path, route.route))