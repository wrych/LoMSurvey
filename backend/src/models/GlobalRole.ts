import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";

export interface GlobalRoleAttributes {
  id?: number;
  title: string;
  description: string;
}

class GlobalRole
  extends Model<GlobalRoleAttributes>
  implements GlobalRoleAttributes
{
  declare id: number;
  declare title: string;
  declare description: string;
}

GlobalRole.init(
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
    modelName: "GlobalRole",
  }
);

export default GlobalRole;
