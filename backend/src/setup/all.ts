import { setupAssessment } from "./assessment.js";
import { setupDimensions } from "./dimension.js";
import { setupAssessmentRoles } from "./assessmentRole.js";
import { setupStates } from "./state.js";
import { setupUsers } from "./user.js";
import { setupGlobalRoles } from "./globalRole.js";
import { setupGlobalRoleHolder } from "./globalRoleHolder.js";
export const setupAll = async (): Promise<void> => {
  const users = await setupUsers();
  const adminRole = await setupGlobalRoles();
  await setupGlobalRoleHolder(users["andy.moesch@dectris.com"], adminRole);
  await setupAssessmentRoles();
  await setupStates();
  const assessment = await setupAssessment();
  await setupDimensions(assessment);
};
