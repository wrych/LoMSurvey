import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import State from "./State.js";

const Assessment = ORM.define("Assessment", {
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
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: State,
      key: "id",
    },
  },
});
export default Assessment;
