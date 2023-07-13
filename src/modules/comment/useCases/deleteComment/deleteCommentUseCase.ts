import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";

export class DeleteCommentUseCase {
  async execute({ id }: { id: string }): Promise<number> {
    const deletedComment = await prisma.comment.delete({ where: { id } });
    if (!deletedComment) throw new AppError("Não achou pelo ID");
    return 100;
  }
}
