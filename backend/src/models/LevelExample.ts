import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Level from "./Level.js";

export interface LevelExampleAttributes {
  id?: number;
  levelId: number;
  example: string;
}

export class LevelExample
  extends Model<LevelExampleAttributes>
  implements LevelExampleAttributes
{
  declare id: number;
  declare levelId: number;
  declare example: string;
}

LevelExample.init(
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
    example: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: ORM,
    modelName: "LevelExample",
  }
);

LevelExample.belongsTo(Level, { foreignKey: "levelId" });
Level.hasMany(LevelExample, { foreignKey: "levelId" });
