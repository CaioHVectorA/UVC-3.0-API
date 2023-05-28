import { Router } from "express";
import { UpdateUserController } from "../../modules/users/useCases/updateUser/UpdateUserController";

export const updateUser = Router()
const controller = new UpdateUserController()
updateUser.put('/:id', controller.handle)
