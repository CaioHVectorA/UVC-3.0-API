import "express-async-errors"
import { Router } from "express";
import { userRoutes } from "./User/createUser";
import { loginRoutes } from "./login";
import { delUserRoutes } from "./User/delUser";
import { getUserRoutes } from "./User/getUser";
import { updateUser } from "./User/updateUser";

const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/user', userRoutes)
routes.use('/user', delUserRoutes)
routes.use('/user', getUserRoutes)
routes.use('/user',updateUser)

export { routes }