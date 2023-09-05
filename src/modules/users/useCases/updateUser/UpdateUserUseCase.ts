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
    async execute({ id, username, password, imagePath }: UserUpType): Promise<number> {
        const user = await prisma.user.findUnique({ where: { id } })
        let image_path;
        if (imagePath) {
            console.log('coisou!')
            const UUID = randomUUID()
            const path = '/assets/user_images/'+UUID
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
        const updatedUser = prisma.user.update({ where: { id }, data: newUser })
        return 100
    }
}
