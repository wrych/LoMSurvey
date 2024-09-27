import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import Dimension from "./Dimension.js";

const Level = ORM.define("Level", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
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
export default Level;
