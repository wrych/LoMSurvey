import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Dimension from "./Dimension.js";

export interface LevelAttributes {
  id?: number;
  title: string;
  description: string;
  level: number;
  dimensionId: number;
}

class Level extends Model<LevelAttributes> implements LevelAttributes {
  declare id: number;
  declare title: string;
  declare description: string;
  declare level: number;
  declare dimensionId: number;
}

Level.init(
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
    level: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dimensionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Dimension,
        key: "id",
      },
    },
  },
  {
    sequelize: ORM,
    modelName: "Level",
  }
);
export default Level;
