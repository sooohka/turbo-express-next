import { Client } from "pg";

const dbClient = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

export default dbClient;
