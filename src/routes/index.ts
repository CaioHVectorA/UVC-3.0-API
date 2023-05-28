import "express-async-errors"
import { Router } from "express";
import { userRoutes } from "./user";
import { loginRoutes } from "./login";

const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/users', userRoutes)

export { routes }