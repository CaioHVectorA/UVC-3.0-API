import { Request, Response } from "express";
import getNewsUseCase from "./GetNewsUseCase";
const usecase = new getNewsUseCase()
export default class GetNewsController {
    async handleGetAll(req: Request, res: Response) {
        const response = await usecase.getAll()
        res.json(response)
    }
    async handleGetOne(req: Request, res: Response) {
        const { id }: { id: number } = req.body
        const response = await usecase.getOne({ id })
        return res.json(response)
    }
}