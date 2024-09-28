import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import User from "./User.js";
import Assessment from "./Assessment.js";

const RoleHolder = ORM.define("RoleHolder", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  assessment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Assessment,
      key: "id",
    },
  },
});
export default RoleHolder;
