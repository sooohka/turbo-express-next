import { RequestHandler } from "express";

export { default as errorMiddleware } from "./error";

const reqLogMiddleware: RequestHandler = (req, res, next) => {
  console.warn(req.path);
  next();
};

export default reqLogMiddleware;
