import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import AssessmentSession from "./AssessmentSession.js";

export interface WeightReasoningAttributes {
  id?: number;
  text?: string;
  assessmentSessionId: number;
}

export class WeightReasoning
  extends Model<WeightReasoningAttributes>
  implements WeightReasoningAttributes
{
  declare id: number;
  declare text: string;
  declare assessmentSessionId: number;
}

WeightReasoning.init(
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
  },
  {
    sequelize: ORM,
    modelName: "WeightReasoning",
  }
);
