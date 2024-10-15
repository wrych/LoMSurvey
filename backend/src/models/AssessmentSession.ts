import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Assessment from "./Assessment.js";
import State from "./State.js";

export interface AssessmentSessionAttributes {
  id?: number;
  assessmentId: number;
  stateId: number;
}

class AssessmentSession
  extends Model<AssessmentSessionAttributes>
  implements AssessmentSessionAttributes
{
  declare id: number;
  declare assessmentId: number;
  declare stateId: number;
}

AssessmentSession.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    assessmentId: {
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
  },
  {
    sequelize: ORM,
    modelName: "AssessmentSession",
  }
);

export default AssessmentSession;

AssessmentSession.belongsTo(Assessment, { foreignKey: "assessmentId" });
Assessment.hasMany(AssessmentSession, { foreignKey: "assessmentId" });
AssessmentSession.belongsTo(State, { foreignKey: "stateId" });
State.hasMany(AssessmentSession, { foreignKey: "stateId" });
