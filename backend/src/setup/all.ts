import { setupAssessment } from "./assessment.js";
import { setupDimensions } from "./dimension.js";
import { setupAssessmentRoles } from "./assessmentRole.js";
import { setupStates } from "./state.js";
import { setupUsers } from "./user.js";
import { setupGlobalRoles } from "./globalRole.js";
import { setupGlobalRoleHolder } from "./globalRoleHolder.js";
import { setupAssessmentSessions } from "./assessmentSession.js";
import { setupAssessmentSessionRoleHolders } from "./assessmentSessionRoleHolder.js";

export const setupAll = async (): Promise<void> => {
  const users = await setupUsers();
  const adminRole = await setupGlobalRoles();
  await setupGlobalRoleHolder(users["andy.moesch@dectris.com"], adminRole);
  const [draft, ready, active, review, done] = await setupStates();
  const [assesseeRole, peerRole, delegatorRole, purposeMemberRole] =
    await setupAssessmentRoles([draft, ready, active, review, done]);
  const [dryRun, q4] = await setupAssessment();
  const dimensions1 = await setupDimensions(dryRun);
  const dimensions2 = await setupDimensions(q4);
  const session1 = await setupAssessmentSessions(dryRun, draft, dimensions1);
  const session2 = await setupAssessmentSessions(dryRun, ready, dimensions1);
  const session3 = await setupAssessmentSessions(dryRun, active, dimensions1);
  const session4 = await setupAssessmentSessions(dryRun, review, dimensions1);
  for (const s of [session1, session2, session3, session4]) {
    await setupAssessmentSessionRoleHolders(s, [
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
  }
};
