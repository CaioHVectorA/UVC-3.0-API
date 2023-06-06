import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";
import { createCommentDTO } from "../../dtos/comment";

export class CreateCommentUseCase {
    async execute({ content,comment_by,comment_in,userId }: createCommentDTO): Promise<number> {
        const comment = await prisma.comment.create({data: {content,comment_by,comment_in}})
        if (!comment) {
            throw new AppError('Ocorreu um erro.')
        }
        return 100
    } 
}