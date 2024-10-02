import Assessment from "@/models/Assessment.js";
import * as dimensionService from "@/services/dimension.js";
import { setupLevels } from "./level.js";
import { DimensionAttributes } from "@/models/Dimension.js";

export const setupDimensions = async (
  assessment: Assessment
): Promise<void> => {
  for (let d of [
    ["Ownership", "Ownership description", "Ownership impact", 4, 12],
    [
      "Subject Matter Expertise",
      "Subject Matter Expertise description",
      "Subject Matter Expertise impact",
      4,
      12,
    ],
    ["Leadership", "Leadership description", "Leadership impact", 6, 12],
    [
      "Collaboration",
      "Collaboration description",
      "Collaboration impact",
      4,
      11,
    ],
    [
      "Communication",
      "Communication description",
      "Communication impact",
      4,
      11,
    ],
  ]) {
    const dimension = await dimensionService.create({
      title: d[0],
      description: d[1],
      impact: d[2],
      min: d[3],
      max: d[4],
      assessmentId: assessment.id,
    } as DimensionAttributes);
    await setupLevels(dimension);
  }
};
