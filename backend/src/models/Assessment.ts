import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";
import State from "./State.js";

interface AssessmentAttributes {
  id?: number;
  title: string;
  stateId: number;
}

class Assessment
  extends Model<AssessmentAttributes>
  implements AssessmentAttributes
{
  declare id: number;
  declare title: string;
  declare stateId: number;
}

Assessment.init(
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
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: State,
        key: "id",
      },
    },
  },
  {
    sequelize: ORM,
    modelName: "Assessment",
  }
);
export default Assessment;
export { AssessmentAttributes };
