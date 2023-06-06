import { Response, Request } from "express";
import { AppError } from "../../../errors/AppError";
import toggleLikeUseCase from "./toggleLikeUseCase";

export class toggleLikeController {
  async handle(req: Request, res: Response) {
    const { isLiked, userId,id } = req.body;
    const histId = req.params.histid;
    const useCase = new toggleLikeUseCase();
    const result = await useCase.execute({ histId, isLiked, userId,id });
    if (result !== 100) throw new AppError("Algo deu errado.");
    return res.status(200).json({ message: "Sucesso" });
  }
}
