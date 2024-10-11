import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Dimension from "./Dimension.js";
import AssessmentSession from "./AssessmentSession.js";

export interface ValueReasoningAttributes {
  id?: number;
  text?: string;
  assessmentSessionId: number;
  dimensionId: number;
}

export class ValueReasoning
  extends Model<ValueReasoningAttributes>
  implements ValueReasoningAttributes
{
  declare id: number;
  declare text: string;
  declare assessmentSessionId: number;
  declare dimensionId: number;
}

ValueReasoning.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
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
    modelName: "ValueReasoning",
  }
);
