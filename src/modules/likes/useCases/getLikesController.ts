import { Request, Response } from "express";
import getLikesUseCase from "./getLikesUseCase";

export default class GetLikesController {
  async handle(req: Request, res: Response) {
    const { userId } = req.body;
    const histId = req.params.id;
    const usecase = new getLikesUseCase();
    const result = await usecase.execute({ userId, histId });
    res.json(result);
  }
}
