import { Router } from "express";
import GetLikesController from "../../modules/likes/useCases/getLikesController";

export const getLikesRoute = Router();
const controller = new GetLikesController();
getLikesRoute.post("/:id", controller.handle);
