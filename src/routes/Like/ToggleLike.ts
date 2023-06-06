import { Router } from "express";

import { toggleLikeController } from "../../modules/likes/useCases/toggleLikeController";

export const toggleLikeRouter = Router();
const controller = new toggleLikeController();
toggleLikeRouter.post("/:histid", controller.handle);
