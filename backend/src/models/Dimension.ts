import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import Assessment from "./Assessment.js";

const Dimension = ORM.define("Dimension", {
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
  impact: {
    type: DataTypes.TEXT,
    allowNull: false,
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
export default Dimension;
