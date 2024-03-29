import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";
import cors from "cors";
export const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'))
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);
if (process.env.NODE_ENV !== 'test') app.listen(3333, () => console.log("SERVER RODANDO"));
