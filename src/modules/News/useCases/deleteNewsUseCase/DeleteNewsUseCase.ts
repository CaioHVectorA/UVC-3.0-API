import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";

export class DeleteNewsUseCase {
    async execute({ id }: { id: number }) {
        const deleted = prisma.news.delete({ where: { id } })
        if (!deleted) throw new AppError('Notícia não encontrada')
        return deleted
    }
}