import { User } from "@prisma/client";
import { delUserDTO } from "../../dtos/delUserDTO";
import { prisma } from "../../../../prisma.client";
import { AppError } from "../../../../errors/AppError";

export class delUserUseCase {
    async execute({ id }: delUserDTO): Promise<User> {
        const user = await prisma.user.findUnique({ where: {id} })
        if (user) {
            const userDeleted = await prisma.user.delete({where: {id}})
            return userDeleted
        } else {
            throw new AppError('Usuário não encontrado.')
        }
    }
}
