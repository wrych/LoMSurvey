import Dimension from "@/models/Dimension.js";
import * as levelService from "@/services/level.js";

const levels = [
  {
    title: "Level 4",
    description: "Level 4 description",
    level: 4,
  },
  {
    title: "Level 5",
    description: "Level 5 description",
    level: 5,
  },
  {
    title: "Level 6",
    description: "Level 6 description",
    level: 6,
  },
  {
    title: "Level 7",
    description: "Level 7 description",
    level: 7,
  },
  {
    title: "Level 8",
    description: "Level 8 description",
    level: 8,
  },
  {
    title: "Level 9",
    description: "Level 9 description",
    level: 9,
  },
  {
    title: "Level 10",
    description: "Level 10 description",
    level: 10,
  },
  {
    title: "Level 11",
    description: "Level 11 description",
    level: 11,
  },
  {
    title: "Level 12",
    description: "Level 12 description",
    level: 12,
  },
];

export const setupLevels = async (dimension: Dimension): Promise<void> => {
  levels.forEach(async (l) => {
    await levelService.create({
      title: l.title,
      description: l.description,
      level: l.level,
      dimensionId: dimension.id,
    });
  });
};
