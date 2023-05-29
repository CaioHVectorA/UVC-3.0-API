import { Comment } from "@prisma/client";
import { prisma } from "../../../../prisma.client";
import { AppError } from "../../../../errors/AppError";


export class GetCommentsUseCase {
    async execute({ ref }: {ref: string}): Promise<Comment[]> {
        if (!ref) throw new AppError('Sem referência')
        const comment_in = ref
        const comments = await prisma.comment.findMany({ where: { comment_in } })
        return comments
    }
}