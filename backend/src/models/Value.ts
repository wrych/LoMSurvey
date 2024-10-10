import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Dimension from "./Dimension.js";
import AssessmentSession from "./AssessmentSession.js";

export interface ValueAttributes {
  id?: number;
  value?: number;
  assessmentSessionId: number;
  dimensionId: number;
}

export class Value extends Model<ValueAttributes> implements ValueAttributes {
  declare id: number;
  declare value: number;
  declare assessmentSessionId: number;
  declare dimensionId: number;
}

Value.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.FLOAT,
      defaultValue: null,
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
  },
  {
    sequelize: ORM,
    modelName: "Value",
  }
);
