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
    async execute({ id, username, password, imagePath }: UserUpType): Promise<{username: string, image_path: string}> {
        const user = await prisma.user.findUnique({ where: { id } })
        let image_path;
        if (imagePath) {
            console.log('coisou!')
            const path = '/assets/user_images/'+id+'.png'
            image_path = path
            saveBase64AsPNG(imagePath, process.cwd()+'/public/'+path)
        }
        if (!user) {
            throw new AppError('Usuário não encontrado.')
        }
        const newUser = {
            username: username || user.username,
            password: password || user.password,
            image_path: image_path || user.image_path
        }
        console.log(newUser)
        const updatedUser = await prisma.user.update({ where: { id }, data: newUser })
        return {
             username: updatedUser.username,
             image_path: updatedUser.image_path
            }
    }
}
