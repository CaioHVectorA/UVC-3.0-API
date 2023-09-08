import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma.client";
import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { hashPassword } from "../../../jwt";
export class CreateUserUseCase {
  async execute({
    username,
    password,
  }: CreateUserDTO): Promise<{ username: string; id: string, image_path: string }> {
    const cripPass = await hashPassword(password);
    const jaexiste = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (jaexiste) {
      throw new AppError("Usuário já existe. Tente Login.");
    }

    const user: User = await prisma.user.create({
      data: { username, password: cripPass },
    });
    return {
      username: user.username,
      id: user.id,
      image_path: user.image_path,
    };
  }
}
