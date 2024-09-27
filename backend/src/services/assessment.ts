import Dimension from "../models/Dimension.js";

const findAll = async (): Promise<Dimension[]> => {
  const dimensions: Dimension[] = await Dimension.findAll();
  return dimensions;
};

export { findAll };
