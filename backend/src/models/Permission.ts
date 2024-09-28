import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import State from "./State.js";
import Assessment from "./Assessment.js";

const Permission = ORM.define("Permission", {
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
  assessment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Assessment,
      key: "id",
    },
  },
  stateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: State,
      key: "id",
    },
  },
});
export default Permission;
