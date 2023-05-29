import { Router } from "express";
import { GetCommentController } from "../../modules/comment/useCases/getComments/getCommentsController";

export const GetComments = Router()
const controller = new GetCommentController()
GetComments.get('/:ref', controller.handle)
