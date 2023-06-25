import { Like } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma.client";

export default class getLikesUseCase {
  async execute({
    userId,
    histId,
  }: {
    userId: string;
    histId: string;
  }): Promise<Like> {
    const likeFound = await prisma.like.findFirst({
      where: { userId, histId },
    });
    if (!likeFound) throw new AppError("Like não encontrado");
    return likeFound;
  }
}
