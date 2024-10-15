import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import State from "./State.js";
import AssessmentRole from "./AssessmentRole.js";

export interface PermissionAttributes {
  id?: number;
  roleId: number;
  stateId: number;
  can_view?: boolean;
  can_edit?: boolean;
}

class Permission
  extends Model<PermissionAttributes>
  implements PermissionAttributes
{
  declare id: number;
  declare roleId: number;
  declare stateId: number;
  declare can_view: boolean;
  declare can_edit: boolean;
}

Permission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AssessmentRole,
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
    can_view: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    can_edit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: ORM,
    modelName: "Permission",
  }
);
export default Permission;

Permission.belongsTo(AssessmentRole, { foreignKey: "roleId" });
Permission.belongsTo(State, { foreignKey: "stateId" });

AssessmentRole.hasMany(Permission, { foreignKey: "roleId" });
State.hasMany(Permission, { foreignKey: "stateId" });
