import Assessment from "@/models/Assessment.js";
import * as dimensionService from "@/services/dimension.js";

export const setupDimensions = async (
  assessment: Assessment
): Promise<void> => {
  for (let d in [
    ["Ownership", "Ownership description", "Ownership impact"],
    [
      "Subject Matter Expertise",
      "Subject Matter Expertise description",
      "Subject Matter Expertise impact",
    ],
    ["Leadership", "Leadership description", "Leadership impact"],
    ["Collaboration", "Collaboration description", "Collaboration impact"],
    ["Communication", "Communication description", "Communication impact"],
  ]) {
    dimensionService.create({
      title: d[0],
      description: d[1],
      impact: d[2],
      assessmentId: assessment.id,
    });
  }
};
