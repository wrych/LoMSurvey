import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";

export interface AssessmentRoleAttributes {
  id?: number;
  title: string;
  description: string;
}

class AssessmentRole
  extends Model<AssessmentRoleAttributes>
  implements AssessmentRoleAttributes
{
  declare id: number;
  declare title: string;
  declare description: string;
}

AssessmentRole.init(
  {
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
  },
  {
    sequelize: ORM,
    modelName: "AssessmentSessionRole",
  }
);

export default AssessmentRole;
