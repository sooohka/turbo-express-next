import { Express, urlencoded } from "express";
import Container from "../container";
import routes from "../router";

const expressLoader = async (app: Express, container: Container) => {
  app.use(urlencoded({ extended: true }));

  app.use("/api", routes(container));
};

export default expressLoader;
