import { Request, Response } from "express";
import { delUserUseCase } from "./delUserUseCase";

export class delUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const delCase = new delUserUseCase()
        const result = await delCase.execute({ id })
        res.status(200).json(result)
    }
}