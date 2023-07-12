import { Router } from "express";
import { getLikesRoute } from "../Like/getLikes";
import GetNewsController from "../../modules/News/useCases/GetNewsUseCase/GetNewsController";


const controller = new GetNewsController()

export const GetNewsRoute = Router()

GetNewsRoute.get('/', controller.handleGetAll)
GetNewsRoute.get('/one', controller.handleGetOne)