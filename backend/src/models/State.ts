import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";

const State = ORM.define("State", {
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
});
export default State;
