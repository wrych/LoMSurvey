import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";

export interface StateAttributes {
  id?: number;
  rank: number;
  title: string;
}

class State extends Model<StateAttributes> implements StateAttributes {
  declare id: number;
  declare rank: number;
  declare title: string;
}

State.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: ORM,
    modelName: "State",
  }
);

export default State;
