import { Router } from "express";
import { createRentController } from "../../modules/comment/useCases/createCommentRent/createCommentController";

export const createRent = Router()

const controller = new createRentController()

createRent.post('/', controller.handle)