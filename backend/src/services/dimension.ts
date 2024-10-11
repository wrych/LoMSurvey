import Assessment from "../models/Assessment.js";
import Dimension, { DimensionAttributes } from "../models/Dimension.js";

export const findAll = async (): Promise<Dimension[]> => {
  const dimensions: Dimension[] = await Dimension.findAll();
  return dimensions;
};

export const findById = async (id: number): Promise<Dimension | null> => {
  const dimension: Dimension | null = await Dimension.findByPk(id);
  return dimension;
};

export const findAssessmentDimensions = async (
  assessment: Assessment
): Promise<Dimension[]> => {
  const dimensions: Dimension[] = await Dimension.findAll({
    where: {
      assessmentId: assessment.id,
    },
  });
  return dimensions;
};

export const create = async (
  dimension: DimensionAttributes
): Promise<Dimension> => {
  const newDimension = await Dimension.create(dimension);
  return newDimension;
};
