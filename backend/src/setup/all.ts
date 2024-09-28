import { setupAssessment } from "./assessment.js";
import { setupDimensions } from "./dimension.js";
import { setupRoles } from "./role.js";
import { setupStates } from "./state.js";

export const setupAll = async (): Promise<void> => {
  await setupRoles();
  await setupStates();
  const assessment = await setupAssessment();
  await setupDimensions(assessment);
};
