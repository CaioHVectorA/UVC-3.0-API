import { User } from "@prisma/client";
import { prisma } from "../../../../prisma.client";
import { AppError } from "../../../../errors/AppError";
type UserUpType = {
    id: string;
  } & Partial<{
    username: string;
    password: string;
  }>;
  


export class UpdateUserUseCase {
    async execute({ id,username,password }: UserUpType): Promise<number> {
        console.table({id,username,password})
        const user = await prisma.user.findUnique({where: {id}})
        if (!user) {
            throw new AppError('Usuário não encontrado.')
        }
    const newUser = {
        username: username || user.username,
        password: password || user.password,
    }
    const updatedUser = prisma.user.update({where: {id},data: newUser})
    return 100
    }
}
