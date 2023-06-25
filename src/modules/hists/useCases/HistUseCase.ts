import { Hist } from "@prisma/client";
import { prisma } from "../../../prisma.client";
import { CreateHistDTO } from "../dtos/HistDTO";
import { AppError } from "../../../errors/AppError";

export default class HistUseCase {
  // Caso não exista a história, esse método é chamado.
  async create({ ref }: CreateHistDTO): Promise<Hist> {
    const Hist = await prisma.hist.create({
      data: { ref, views: 0, last_view: new Date().toISOString(), likesNum: 0 },
    });
    return Hist;
  }
  // Caso já exista a história, esse método é chamado.
  async acess({
    ref,
    prevHist,
  }: {
    ref: string;
    prevHist: Hist;
  }): Promise<Hist> {
    const HistFound = await prisma.hist.findFirst({
      where: { ref },
      include: { likes: true },
    });
    if (!HistFound) throw new AppError("A história não existe");
    const HistUpdate = await prisma.hist.update({
      where: {
        ref,
      },
      data: {
        last_view: new Date().toISOString(),
        views: prevHist.views + 1,
        likesNum: HistFound.likes.length,
      },
    });
    if (!HistUpdate)
      throw new AppError("Não foi possível dar update na história!");
    return HistUpdate;
  }
}
