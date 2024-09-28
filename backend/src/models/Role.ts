import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";

export interface RoleAttributes {
  id?: number;
  title: string;
  description: string;
}

class Role extends Model<RoleAttributes> implements RoleAttributes {
  declare id: number;
  declare title: string;
  declare description: string;
}

Role.init(
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
    modelName: "Role",
  }
);

export default Role;
