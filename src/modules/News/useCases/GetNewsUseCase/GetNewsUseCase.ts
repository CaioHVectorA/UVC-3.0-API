import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";

export default class GetNewsUseCase {
    async getOne({ id }: { id: number }) {
        const new_found = await prisma.news.findFirst({ where: { id } })
        if (!new_found) throw new AppError('not found', 404)
        return new_found
    }

    async getAll() {
        const news_found = await prisma.news.findMany()
        return news_found
    }
}