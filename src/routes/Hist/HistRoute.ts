import { Router } from "express";

import HistController from "../../modules/hists/useCases/HistController";

export const HistRouter = Router();

const controller = new HistController();
HistRouter.get("/:ref", controller.handle);
