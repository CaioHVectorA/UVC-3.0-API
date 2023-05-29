import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";
import { createCommentDTO } from "../../dtos/comment";

export class CreateCommentUseCase {
    async execute({ content,comment_by }: createCommentDTO): Promise<number> {
        const comment = await prisma.comment.create({data: {content,comment_by}})
        if (!comment) {
            throw new AppError('Ocorreu um erro.')
        }
        return 100
    } 
}