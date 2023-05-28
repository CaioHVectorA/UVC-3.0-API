import { Response, Request } from "express";
import { getUsersUseCase } from "./getUsersUseCase";
import { User } from "@prisma/client";

export class getUsersControllers {
    async handle(req: Request, res: Response): Promise<any> {
        const useCase = new getUsersUseCase()
        const users = await useCase.execute()
        return res.json(users)
    }
    async getOne(req: Request, res: Response) {
        const id = req.params.id
        const useCase = new getUsersUseCase()
        const user = await useCase.getOne({id})
        return res.json(user)
    } 
}
