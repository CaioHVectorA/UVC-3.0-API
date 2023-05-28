import { Router } from "express";
import { getUsersControllers } from "../../modules/users/useCases/getUsers/getUsersControllers";


export const getUserRoutes = Router()
const controller = new getUsersControllers()
getUserRoutes.get('/', controller.handle)
getUserRoutes.get('/:id', controller.getOne)