import { Client } from "pg";
import config from "../config/env";

const pgClient = new Client({
  user: config.db.user,
  password: config.db.password,
  host: config.db.host,
  database: config.db.database,
  port: config.db.port,
});

const pgLoader = async () => {
  await pgClient.connect();
  return pgClient;
};

export default pgLoader;
