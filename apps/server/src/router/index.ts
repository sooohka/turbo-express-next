import { Router } from "express";
import Container from "../container";
import ownerRouter from "./owner";
import petRouter from "./pet";

const router = Router();
const routes = (container: Container) => {
  router.use("/pets", petRouter(container.get("petController")));
  router.use("/owners", ownerRouter(container.get("ownerController")));
  return router;
};

export default routes;
