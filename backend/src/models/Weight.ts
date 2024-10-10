import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Dimension from "./Dimension.js";
import AssessmentSession from "./AssessmentSession.js";

export interface WeightAttributes {
  id?: number;
  value?: number;
  assessmentSessionId: number;
  dimensionId: number;
}

export class Weight
  extends Model<WeightAttributes>
  implements WeightAttributes
{
  declare id: number;
  declare value: number;
  declare assessmentSessionId: number;
  declare dimensionId: number;
}

Weight.init(
  {
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
  },
  {
    sequelize: ORM,
    modelName: "Weight",
  }
);
