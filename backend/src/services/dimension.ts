import Dimension, { DimensionAttributes } from "@/models/Dimension.js";

export const findAll = async (): Promise<Dimension[]> => {
  const dimensions: Dimension[] = await Dimension.findAll();
  return dimensions;
};

export const create = async (
  dimension: DimensionAttributes
): Promise<Dimension> => {
  const newDimension = await Dimension.create(dimension);
  return newDimension;
};
