import { Router } from "express";
import { CreateCommentController } from "../../modules/comment/useCases/createComment/createCommentController";

export const createComment = Router()

const controller = new CreateCommentController()

createComment.post('/', controller.handle)