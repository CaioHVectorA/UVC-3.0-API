import "express-async-errors";
import { Router } from "express";
import { userRoutes as createUser } from "./User/createUser";
import { loginRoutes as Login } from "./User/login";
import { delUserRoutes as deleteUser } from "./User/delUser";
import { getUserRoutes as getUser } from "./User/getUser";
import { updateUser } from "./User/updateUser";
import { createComment } from "./Comment/createComment";
import { GetComments } from "./Comment/getComments";
import { deleteComment } from "./Comment/deleteComment";
import { editComment } from "./Comment/editComment";
import { toggleLikeRouter } from "./Like/ToggleLike";
import { getLikesRoute } from "./Like/getLikes";
import { HistRouter } from "./Hist/HistRoute";
import { CreateNewsRouter } from "./News/CreateNews";
import { GetNewsRoute } from "./News/GetNews";
const routes = Router();

routes.use("/login", Login); // login
routes.use("/user", createUser); // createUser
routes.use("/user", deleteUser);
routes.use("/user", getUser);
routes.use("/user", updateUser);
routes.use("/comment", createComment);
routes.use("/comment", GetComments);
routes.use("/comment", deleteComment);
routes.use("/comment", editComment);
routes.use("/like", toggleLikeRouter);
routes.use("/likes", getLikesRoute);
routes.use("/hist", HistRouter);
routes.use('/news',CreateNewsRouter)
routes.use('/news',GetNewsRoute)
export { routes };
