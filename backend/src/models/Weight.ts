import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import User from "./User.js";
import Dimension from "./Dimension.js";

const Weight = ORM.define("Weight", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  dimension: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Dimension,
      key: "id",
    },
  },
});
export default Weight;
