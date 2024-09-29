import Dimension from "@/models/Dimension.js";
import Level, { LevelAttributes } from "@/models/Level.js";

export const findAll = async (): Promise<Level[]> => {
  const levels: Level[] = await Level.findAll();
  return levels;
};

export const findById = async (id: number): Promise<Level | null> => {
  const level: Level | null = await Level.findByPk(id);
  return level;
};

export const findByDimension = async (
  dimension: Dimension
): Promise<Level[]> => {
  const levels: Level[] = await Level.findAll({
    where: {
      dimensionId: dimension.id,
    },
  });
  return levels;
};

export const create = async (level: LevelAttributes): Promise<Level> => {
  const newlevel = await Level.create(level);
  return newlevel;
};
