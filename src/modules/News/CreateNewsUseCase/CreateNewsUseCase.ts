import { News } from '@prisma/client'
import { prisma } from '../../../prisma.client'
import {New} from '../DTOs/New'


export default class CreateNewsUseCase {
    async execute({ image,title,body,external_link }: New): Promise<News> {
        if (external_link) {
           const _new = await prisma.news.create({data: {
            image,
            title,
            external_link,
           }}) 
           return _new
        }
        const _new = await prisma.news.create({ data: {
            image,title,body,
        } })
        return _new
    }
}