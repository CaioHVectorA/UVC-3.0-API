import { Router } from "express";
import CreateNewsController from "../../modules/News/CreateNewsUseCase/CreateNewsController";
export const CreateNewsRouter = Router()

const controller = new CreateNewsController()
CreateNewsRouter.post('/',controller.handle)