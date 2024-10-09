import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Level from "./Level.js";

export interface LevelCapabilityAttributes {
  id?: number;
  levelId: number;
  capability: string;
}

export class LevelCapability
  extends Model<LevelCapabilityAttributes>
  implements LevelCapabilityAttributes
{
  declare id: number;
  declare levelId: number;
  declare capability: string;
}

LevelCapability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Level,
        key: "id",
      },
    },
    capability: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: ORM,
    modelName: "LevelCapability",
  }
);

LevelCapability.belongsTo(Level, { foreignKey: "levelId" });
Level.hasMany(LevelCapability, { foreignKey: "levelId" });
