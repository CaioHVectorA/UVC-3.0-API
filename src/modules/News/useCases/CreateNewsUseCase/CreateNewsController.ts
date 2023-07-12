import { News } from "@prisma/client";
import { Request, Response, response } from "express";
import CreateNewsUseCase from "./CreateNewsUseCase";
import { New } from "../../DTOs/New";
import { json } from "stream/consumers";

const usecase = new CreateNewsUseCase()
export default class CreateNewsController {
    async handle(req: Request, res: Response) {
        const { image, title, body, external_link }: New = req.body
        const reponse = await usecase.execute({ image, title, body, external_link })
        res.json(reponse)
    }
}