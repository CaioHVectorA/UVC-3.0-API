import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";


export class DeleteCommentUseCase {
    async execute({ id }: { id: string }): Promise<number> {
        const Comment = await prisma.comment.findUnique({ where: { id } })
        if (!Comment) {
            throw new AppError('Algo deu errado.')
        }
        const deletedComment = await prisma.comment.delete({ where: { id } })
        return 100
    }
}