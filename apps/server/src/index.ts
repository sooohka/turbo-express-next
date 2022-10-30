import Express from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import containerLoader from "./loader/containerLoader";
import expressLoader from "./loader/expressLoader";
import pgLoader from "./loader/pgLoader";

const app = Express();

const init = async () => {
  app.use(morgan("dev"));

  app.use(
    morgan("tiny", {
      stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
        flags: "a",
      }),
    })
  );

  const pgClient = await pgLoader();
  const container = await containerLoader(pgClient);

  await expressLoader(app, container);
};

app.listen(8081, () => {
  console.warn("server listen on 8081");
  init();
});
