import { config } from "dotenv";
import Express, { urlencoded } from "express";
import path from "path";
import reqLogMiddleware, { errorMiddleware } from "./middleware";

const envPath = path.join(__dirname, "../../../.env.local");
config({ path: envPath });

const app = Express();

const init = async () => {
  app.use(urlencoded({ extended: true }));
  app.use(reqLogMiddleware);
  await import("./db").then(({ default: dbClient }) => {
    dbClient.connect();
  });
  await import("./router").then(({ routes }) => {
    routes.forEach((router, key) => {
      app.use(key, router);
    });
  });
  app.use(errorMiddleware);
};

app.listen(8081, () => {
  console.warn("server listen on 8081");
  init();
});
