import { Request, Response } from "express";
import EditNewUseCase from "./EditNewUseCase";

const usecase = new EditNewUseCase()
export default class EditNewController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const newProps = req.body
        const response = await usecase.execute({ id, newProps })
        res.json(response)
    }
}