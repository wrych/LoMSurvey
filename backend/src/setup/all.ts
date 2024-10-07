import { setupAssessment } from "./assessment.js";
import { setupDimensions } from "./dimension.js";
import { setupAssessmentRoles } from "./assessmentRole.js";
import { setupStates } from "./state.js";
import { setupUsers } from "./user.js";
import { setupGlobalRoles } from "./globalRole.js";
import { setupGlobalRoleHolder } from "./globalRoleHolder.js";
import { setupAssessmentSessions } from "./assessmentSession.js";
import { setupAssessmentRoleHolders } from "./assessmentRoleHolder.js";

export const setupAll = async (): Promise<void> => {
  const users = await setupUsers();
  const adminRole = await setupGlobalRoles();
  await setupGlobalRoleHolder(users["andy.moesch@dectris.com"], adminRole);
  await setupAssessmentRoles();
  await setupStates();
  const [assesseeRole, peerRole, delegatorRole, purposeMemberRole] =
    await setupAssessmentRoles();
  const assessment = await setupAssessment();
  await setupDimensions(assessment);
  const session = await setupAssessmentSessions(assessment);
  await setupAssessmentRoleHolders(session, [
    {
      roleHolders: [users["andy.moesch@dectris.com"]],
      role: assesseeRole,
    },
    {
      roleHolders: [users["ivo.pejakovic@dectris.com"]],
      role: peerRole,
    },
    {
      roleHolders: [users["valeria.radicci@dectris.com"]],
      role: delegatorRole,
    },
    {
      roleHolders: [users["matthias.schneebeli@dectris.com"]],
      role: purposeMemberRole,
    },
  ]);
  await setupAssessmentRoleHolders(session, [
    {
      roleHolders: [users["ivo.pejakovic@dectris.com"]],
      role: assesseeRole,
    },
    {
      role: peerRole,
      roleHolders: [users["andy.moesch@dectris.com"]],
    },
    {
      roleHolders: [users["valeria.radicci@dectris.com"]],
      role: delegatorRole,
    },
    {
      roleHolders: [users["matthias.schneebeli@dectris.com"]],
      role: purposeMemberRole,
    },
  ]);
};
