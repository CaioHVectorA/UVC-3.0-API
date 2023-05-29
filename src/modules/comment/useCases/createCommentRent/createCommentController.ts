import { Request, Response } from "express";
import { CreateRentUseCase } from "./createCommentRentUseCase";
import { comment_rentDTO } from "../../dtos/comment_rent";

export class createRentController {
    async handle(req: Request, res: Response) {
        const { userId, commentId }: comment_rentDTO = req.body

        const useCase = new CreateRentUseCase()

        await useCase.execute({ userId, commentId })

        return res.status(200).json({ message: 'Conexão Criada!' })
    }
}