import { User } from "@prisma/client";
import { prisma } from "../../../../prisma.client";
import { AppError } from "../../../../errors/AppError";
import fs from 'fs'
import { randomUUID } from "crypto";
import { saveBase64AsPNG } from "../../../../utils/saveImageby64";
type UserUpType = {
    id: string;
} & Partial<{
    username: string;
    password: string;
    imagePath: string;
}>;



export class UpdateUserUseCase {
    async execute({ id, username, password, imagePath }: UserUpType): Promise<{username: string, image_path: string, id: string}> {
        const user = await prisma.user.findUnique({ where: { id } })
        let image_path;
        if (!user) {
            throw new AppError('Usuário não encontrado.')
        }
        if (imagePath) {
            const path = 'assets/user_images/'+id+'.png'
            image_path = path
            await saveBase64AsPNG(imagePath, process.cwd()+'/public/'+path)
        }
        const newUser = {
            username: username || user.username,
            password: password || user.password,
            image_path: image_path || user.image_path
        }
        const updatedUser = await prisma.user.update({ where: { id }, data: newUser })
        return {
             id,
             username: updatedUser.username,
             image_path: updatedUser.image_path
            }
    }
}
