import { Router } from "express";
import { DeleteCommentController } from "../../modules/comment/useCases/deleteComment/deleteCommentController";

export const deleteComment = Router()

const controller = new DeleteCommentController()

deleteComment.delete('/:id', controller.handle)