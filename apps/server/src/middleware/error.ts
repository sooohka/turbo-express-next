import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
  res.status(error.status ?? 500).send({
    ...error,
    message: error.message,
    stack: error.stack,
  });
  next();
};

export default errorMiddleware;
