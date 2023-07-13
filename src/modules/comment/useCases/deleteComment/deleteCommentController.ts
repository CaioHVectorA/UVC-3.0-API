import { Request, Response } from "express";
import { DeleteCommentUseCase } from "./deleteCommentUseCase";
import { AppError } from "../../../../errors/AppError";

const useCase = new DeleteCommentUseCase();
export class DeleteCommentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    const result = await useCase.execute({ id });
    if (result !== 100) throw new AppError("Algo deu errado.");
    return res.status(200).json({ message: "Sucesso ao deletar comentário!" });
  }
}
