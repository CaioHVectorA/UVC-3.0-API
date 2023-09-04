import { Request, Response } from "express";
import { DeleteNewsUseCase } from "./DeleteNewsUseCase";
import { AppError } from "../../../../errors/AppError";

const usecase = new DeleteNewsUseCase()
export default class DeleteNewsController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const response = await usecase.execute({ id })
        res.json(response)
    }
    async handleAll(req: Request, res: Response) {
        const response = await usecase.deleteAll()
        if (!response) throw new AppError('Não foi possível deletar todos!')
        res.status(200).json({ message: "Todas notícias deletadas!" })
    }
}