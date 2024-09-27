import { Sequelize } from "sequelize";
import fs from "fs";

fs.mkdirSync("var/db", { recursive: true });

const ORM = new Sequelize({
  dialect: "sqlite",
  storage: "var/db/db.db",
  logging: false,
});

export default ORM;
