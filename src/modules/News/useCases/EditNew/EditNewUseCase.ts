import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma.client";
type newProps = { title?: string, body?: string, external_link?: string, image?: string }
export default class EditNewUseCase {
    async execute({ id, newProps }: { id: number, newProps: newProps }) {
        const { title, body, external_link, image } = newProps;
        const updateData: newProps = {};
        if (title !== undefined) {
            updateData.title = title;
        }
        if (body !== undefined) {
            updateData.body = body;
        }
        if (external_link !== undefined) {
            updateData.external_link = external_link;
        }
        if (image !== undefined) {
            updateData.image = image;
        }
        const _new = await prisma.news.update({
            where: {
                id
            },
            data: updateData
        })
        if (!_new) throw new AppError('Comentário não encontrado')
        return _new
    }
}