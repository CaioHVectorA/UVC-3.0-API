import { Request, Response } from "express";
import { getLoginUseCase } from "./getLoginUseCase";


export class getLoginController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body

        const loginCase = new getLoginUseCase()
        
        const result = await loginCase.execute({ username,password })
        
        res.status(200).json(result)
}
}