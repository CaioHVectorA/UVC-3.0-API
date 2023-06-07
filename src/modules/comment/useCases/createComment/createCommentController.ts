import { Request, Response } from "express";
import { CreateCommentUseCase } from "./createCommentUseCase";
import { createCommentDTO } from "../../dtos/comment";
import { AppError } from "../../../../errors/AppError";
export class CreateCommentController {
    async handle(req: Request, res: Response) {
        console.table(req.body)
        const { content,comment_by,comment_in,username_author }: createCommentDTO = req.body
        const useCase = new CreateCommentUseCase()
        const result = await useCase.execute({content,comment_by,comment_in,username_author})
        if (result !== 100) throw new AppError('Algo deu errado.')
        return res.status(200).json({message: 'Comentário criado!'})
    }
}