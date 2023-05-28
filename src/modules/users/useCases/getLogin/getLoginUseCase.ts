import { prisma } from "../../../../prisma.client";
import { getLoginDTO } from "../../dtos/GetLoginDTO";
import { User } from '@prisma/client'
import { AppError } from "../../../../errors/AppError";

export class getLoginUseCase {
    async execute({ username,password }: getLoginDTO): Promise<User> {
    const user = await prisma.user.findUnique({ where: {username} })
    if (user) {
        const wrongPassword = user.password !== password
        if (wrongPassword) {
            throw new AppError('Senha Incorreta.')
        } else {
            return user
        }
    } else {
        throw new AppError('Usuário não existe.')
    }
    }
}