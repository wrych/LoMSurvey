import { DataTypes, Model } from "sequelize";
import ORM from "../data/ORM.js";

interface AssessmentAttributes {
  id?: number;
  title: string;
}

class Assessment
  extends Model<AssessmentAttributes>
  implements AssessmentAttributes
{
  declare id: number;
  declare title: string;
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
  },
  {
    sequelize: ORM,
    modelName: "Assessment",
  }
);
export default Assessment;
export { AssessmentAttributes };
