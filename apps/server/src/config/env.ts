import dotenv from "dotenv";
import path from "path";

const envPath = path.join(__dirname, "../../../../.env.local");

dotenv.config({ path: envPath });

const config = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
  },
};

export default config;
