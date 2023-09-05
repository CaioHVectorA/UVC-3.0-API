import { User } from "@prisma/client";
import { prisma } from "../../../../prisma.client";
import { AppError } from "../../../../errors/AppError";
type getOne = {
    id: string;
}

export class getUsersUseCase {
    async execute(): Promise<User[]> {
        const users = await prisma.user.findMany()
        return users
    }
    async getOne({ id }: getOne): Promise<User> {
        const user = await prisma.user.findUnique({where: {id}})
        if (user) {
            return user
        } else {
            throw new AppError('Usuário não existe.')
        }
    }
}