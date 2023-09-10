import { User } from "@prisma/client";
import { delUserDTO } from "../../dtos/delUserDTO";
import { prisma } from "../../../../prisma.client";
import { AppError } from "../../../../errors/AppError";
import fs from 'fs'
export class delUserUseCase {
  async execute({ id }: delUserDTO): Promise<User> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }
    try {
      fs.rmSync(`${process.cwd()}/public/assets/user_images/${id}.png`)
    } catch (error) {
      console.log(error)
    }
    return await prisma.user.delete({ where: { id } });
  }
}
