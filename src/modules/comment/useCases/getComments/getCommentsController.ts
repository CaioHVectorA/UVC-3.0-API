import { Request, Response } from "express";
import { GetCommentsUseCase } from "./GetCommentsUseCase";

export class GetCommentController {
    async handle(req: Request, res: Response) {
        const { ref } = req.params
        const useCase = new GetCommentsUseCase()
        const result = await useCase.execute({ref})
        return res.status(200).json(result)
    }
}