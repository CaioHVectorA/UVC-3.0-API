import { Comment } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";
import { createCommentDTO } from "../../dtos/comment";

export class CreateCommentUseCase {
  async execute({
    content,
    comment_by,
    comment_in,
    username_author,
  }: createCommentDTO): Promise<Comment> {
    if (!content || !comment_by || !comment_in || !username_author) throw new AppError('Sem todas as credenciais')
    //@ts-ignore
    const comment = await prisma.comment.create({
      data: { content, comment_by, comment_in, username_author },
    });
    if (!comment) {
      throw new AppError("Ocorreu um erro.");
    }
    return comment;
  }
}
