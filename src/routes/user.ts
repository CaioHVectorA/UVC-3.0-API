import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

export const userRoutes = Router();

const controller = new CreateUserController()
userRoutes.post('/', controller.handle)
