import { prisma } from "../../../prisma.client";
import { LikeDTO } from "../dtos/likeDTO";
import { AppError } from "../../../errors/AppError";
export default class toggleLikeUseCase {
  async execute({ histId, isLiked, userId, id }: LikeDTO): Promise<number> {
    console.log(histId, userId);
    if (!isLiked) {
      //@ts-ignore
      console.log("tentando criar");
      const Like = await prisma.like.create({ data: { userId, histId } });
      console.log(Like);
      if (!Like) {
        console.log("Erro na criação do Like");
        throw new AppError("Ocorreu um erro. 1");
      }
      return 100;
    } else {
      if (!id) {
        throw new AppError("ID não foi provisionado.");
      }
      //@ts-ignore
      const LikeFound = await prisma.like.delete({
        where: {
          id,
        },
      });
      if (!LikeFound) {
        throw new AppError("Ocorreu um erro. 2");
      } else {
        return 100;
      }
    }
  }
}
