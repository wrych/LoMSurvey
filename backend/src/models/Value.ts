import { DataTypes } from "sequelize";
import ORM from "../data/ORM.js";
import Dimension from "./Dimension.js";
import AssessmentSession from "./AssessmentSession.js";

const Value = ORM.define("Value", {
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
  assessmentSessionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AssessmentSession,
      key: "id",
    },
  },
  dimensionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Dimension,
      key: "id",
    },
  },
});
export default Value;
