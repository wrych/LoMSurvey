import Dimension from "@/models/Dimension.js";
import Level, { LevelAttributes } from "@/models/Level.js";
import {
  LevelCapability,
  LevelCapabilityAttributes,
} from "@/models/LevelCapability";
import { LevelExample, LevelExampleAttributes } from "@/models/LevelExample";

export const findAll = async (): Promise<Level[]> => {
  const levels: Level[] = await Level.findAll();
  return levels;
};

export const findById = async (id: number): Promise<Level | null> => {
  const level: Level | null = await Level.findByPk(id, {
    include: [LevelCapability, LevelExample],
  });
  return level;
};

export const findByDimension = async (
  dimension: Dimension
): Promise<Level[]> => {
  const levels: Level[] = await Level.findAll({
    where: {
      dimensionId: dimension.id,
    },
    include: [LevelCapability, LevelExample],
  });
  return levels;
};

export const create = async (level: LevelAttributes): Promise<Level> => {
  const newlevel = await Level.create(level);
  return newlevel;
};

export const createCapability = async (
  capability: LevelCapabilityAttributes
): Promise<LevelCapability> => {
  const newCapability = await LevelCapability.create(capability);
  return newCapability;
};

export const createExample = async (
  example: LevelExampleAttributes
): Promise<LevelExample> => {
  const newExample = await LevelExample.create(example);
  return newExample;
};
