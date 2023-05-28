import { delUserController } from "../../modules/users/useCases/delUser/delUserController";
import { Router } from "express";

export const delUserRoutes = Router()
const controller = new delUserController()

delUserRoutes.delete('/:id',controller.handle)