import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Response,Request } from "express";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const {id} = req.params
        const { username, password } = req.body
        const userCase = new UpdateUserUseCase()
        const result = await userCase.execute({id, username, password})
        return res.status(200).json(result)
    }
}
