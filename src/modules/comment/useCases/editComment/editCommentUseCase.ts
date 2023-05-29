import { Comment } from "@prisma/client"
import { AppError } from "../../../../errors/AppError"
import { prisma } from "../../../../prisma.client"
import { EditCommentDTO } from "../../dtos/editcomment"


export class EditCommentUseCase {
    async execute({ id, newContent }: EditCommentDTO): Promise<Comment> {
        const comment = prisma.comment.findUnique({where: {id}})
        if (!comment) throw new AppError('Comentário não existe.')
        const editedComment = prisma.comment.update({where: {id},data: {content: newContent}})
        return editedComment
    }
}