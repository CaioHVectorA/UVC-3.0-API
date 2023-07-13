import { Request, Response } from "express";
import { EditCommentUseCase } from "./editCommentUseCase";
import { AppError } from "../../../../errors/AppError";

export class editCommentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { newContent } = req.body;
    const useCase = new EditCommentUseCase();
    const result = await useCase.execute({ id, newContent });
    if (!result) throw new AppError("Algo deu errado.");
    res.json(result);
  }
}
