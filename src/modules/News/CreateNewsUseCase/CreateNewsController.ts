import { News } from "@prisma/client";
import { Request, Response } from "express";
import CreateNewsUseCase from "./CreateNewsUseCase";
import { New } from "../DTOs/New";

export default class CreateNewsController {
    async handle(req: Request, res: Response): Promise<News> {
        const usecase = new CreateNewsUseCase()
        const {image,title,body,external_link}: New = req.body 
        const reponse = usecase.execute({ image,title,body,external_link })
        return reponse
    }
}