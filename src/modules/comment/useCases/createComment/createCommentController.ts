import { Request, Response } from "express";
import { CreateCommentUseCase } from "./createCommentUseCase";
import { createCommentDTO } from "../../dtos/comment";
import { AppError } from "../../../../errors/AppError";
export class CreateCommentController {
  async handle(req: Request, res: Response) {
    const {
      content,
      comment_by,
      comment_in,
      username_author,
      img_author
    } = req.body;
    const useCase = new CreateCommentUseCase();
    const result = await useCase.execute({
      content,
      comment_by,
      comment_in,
      username_author,
      author_img: img_author
    });
    if (!result) throw new AppError("Algo deu errado.");
    return res.json(result);
  }
}
