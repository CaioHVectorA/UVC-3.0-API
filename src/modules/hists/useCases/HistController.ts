import { Request, Response } from "express";
import { prisma } from "../../../prisma.client";
import HistUseCase from "./HistUseCase";

export default class HistController {
  async handle(req: Request, res: Response) {
    const { ref } = req.params;
    const useCase = new HistUseCase();
    const Hist = await prisma.hist.findFirst({ where: { ref } });
    if (Hist) {
      const Res = await useCase.acess({ ref, prevHist: Hist });
      res.json(Res);
    } else {
      const Res = await useCase.create({ ref });
      res.json(Res);
    }
  }
}
