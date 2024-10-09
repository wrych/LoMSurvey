import Dimension from "@/models/Dimension.js";
import { LevelAttributes } from "@/models/Level";
import * as levelService from "@/services/level.js";

const levels: { level: number; capabilities: string[]; examples: string[] }[] =
  [];
for (let i = 4; i <= 12; i++) {
  levels.push({
    level: i,
    capabilities: [`Level ${i} capabilities`],
    examples: [`Level ${i} examples`],
  });
}

export const setupLevels = async (dimension: Dimension): Promise<void> => {
  levels.forEach(async (l) => {
    const level = await levelService.create({
      level: l.level,
      dimensionId: dimension.id,
    });
    l.capabilities.forEach(async (c) => {
      await levelService.createCapability({
        levelId: level.id,
        capability: c,
      });
    });
    l.examples.forEach(async (e) => {
      await levelService.createExample({
        levelId: level.id,
        example: e,
      });
    });
  });
};
