import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";
import { comment_rentDTO } from "../../dtos/comment_rent";

export class CreateRentUseCase {
    async execute({ userId,commentId }: comment_rentDTO): Promise<void> {
        const commentExists = await prisma.comment.findUnique({where: { id: commentId }})
        if (!commentExists) throw new AppError('Comentário não existe')
        const userExists = await prisma.user.findUnique({where: {id: userId}})
        if (!userExists) throw new AppError('Usuário não existe')
        const alreadyRent = await prisma.comment_rent.findFirst({ where: { userId } })
        if (alreadyRent) throw new AppError('A conexão já existe!')
        await prisma.comment_rent.create({
            data: {
                userId,
                commentId
            }
        })
    }
} 