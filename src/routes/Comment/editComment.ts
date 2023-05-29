import { Router } from "express";
import { editCommentController } from "../../modules/comment/useCases/editComment/editCommentController";

export const editComment = Router()

const controller = new editCommentController()

editComment.put('/:id', controller.handle)