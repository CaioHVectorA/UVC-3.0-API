import { getLoginController } from "../modules/users/useCases/getLogin/getLoginController"
import { Router } from "express"
export const loginRoutes = Router()
const loginController = new getLoginController()
loginRoutes.post('/',loginController.handle)
