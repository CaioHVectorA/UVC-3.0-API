
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma.client";
import { User } from '@prisma/client'
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
    async execute({ username, password  }: CreateUserDTO): Promise<User> {

        const jaexiste = await prisma.user.findUnique({
            where: {
                username,
            }
        });

        if (jaexiste) {
            throw new AppError('User Already Exists!');
        }

        const user = await prisma.user.create({data: {username,password}})
        return user
    }
}