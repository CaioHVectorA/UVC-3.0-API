import { Comment } from "@prisma/client"
import { AppError } from "../../../../errors/AppError"
import { prisma } from "../../../../prisma.client"
import { EditCommentDTO } from "../../dtos/editcomment"


export class EditCommentUseCase {
    async execute({ id, newContent }: EditCommentDTO): Promise<Comment> {
        const editedComment = await prisma.comment.update({
            where: { id },
            data: { content: newContent },
        });
        console.table(editedComment);
        if (!editedComment) throw new AppError("Comentário não existe.");
        return editedComment;
    }
}