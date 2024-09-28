import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import Assessment from "./Assessment.js";

export interface DimensionAttributes {
  id?: number;
  title: string;
  description: string;
  impact: string;
  assessmentId: number;
}

class Dimension
  extends Model<DimensionAttributes>
  implements DimensionAttributes
{
  declare id: number;
  declare title: string;
  declare description: string;
  declare impact: string;
  declare assessmentId: number;
}

Dimension.init(
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
    impact: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Assessment,
        key: "id",
      },
    },
  },
  {
    sequelize: ORM,
    modelName: "Dimension",
  }
);

export default Dimension;
