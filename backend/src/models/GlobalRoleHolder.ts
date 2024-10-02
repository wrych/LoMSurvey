import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import User from "./User.js";
import GlobalRole from "./GlobalRole.js";

export interface GlobalRoleHolderAttributes {
  id?: number;
  globalRoleId: number;
  userId: number;
}

class GlobalRoleHolder
  extends Model<GlobalRoleHolderAttributes>
  implements GlobalRoleHolderAttributes
{
  declare id: number;
  declare globalRoleId: number;
  declare userId: number;
}

GlobalRoleHolder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    globalRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GlobalRole,
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
    modelName: "GlobalRoleHolder",
  }
);

export default GlobalRoleHolder;

GlobalRoleHolder.belongsTo(GlobalRole, { foreignKey: "globalRoleId" });
GlobalRoleHolder.belongsTo(User, { foreignKey: "userId" });

GlobalRole.hasMany(GlobalRoleHolder, { foreignKey: "globalRoleId" });
User.hasMany(GlobalRoleHolder, { foreignKey: "userId" });
