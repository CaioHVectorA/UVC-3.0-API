import { Request, Response } from "express";
import { DeleteNewsUseCase } from "./DeleteNewsUseCase";

const usecase = new DeleteNewsUseCase()
export default class DeleteNewsController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const response = await usecase.execute({ id })
        res.json(response)
    }
}