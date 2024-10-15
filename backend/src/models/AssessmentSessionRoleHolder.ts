import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import User from "./User.js";
import AssessmentRole from "./AssessmentRole.js";
import AssessmentSession from "./AssessmentSession.js";

export interface AssessmentRoleHolderAttributes {
  id?: number;
  assessmentRoleId: number;
  assessmentSessionId: number;
  userId: number;
}

class AssessmentRoleHolder
  extends Model<AssessmentRoleHolderAttributes>
  implements AssessmentRoleHolderAttributes
{
  declare id: number;
  declare assessmentRoleId: number;
  declare assessmentSessionId: number;
  declare userId: number;
}

AssessmentRoleHolder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    assessmentRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AssessmentRole,
        key: "id",
      },
    },
    assessmentSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AssessmentSession,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize: ORM,
    modelName: "AssessmentRoleHolder",
  }
);

export default AssessmentRoleHolder;

AssessmentRoleHolder.belongsTo(AssessmentRole, {
  foreignKey: "assessmentRoleId",
});
AssessmentRoleHolder.belongsTo(User, { foreignKey: "userId" });
AssessmentRoleHolder.belongsTo(AssessmentSession, {
  foreignKey: "assessmentSessionId",
});

AssessmentRole.hasMany(AssessmentRoleHolder, {
  foreignKey: "assessmentRoleId",
});
User.hasMany(AssessmentRoleHolder, { foreignKey: "userId" });
AssessmentSession.hasMany(AssessmentRoleHolder, {
  foreignKey: "assessmentSessionId",
});
