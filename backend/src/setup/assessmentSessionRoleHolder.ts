import AssessmentSession from "src/models/AssessmentSession.js";
import AssessmentRole from "../models/AssessmentRole.js";
import User from "../models/User.js";
import * as assessmentRoleHolderService from "../services/assessmentRoleHolder.js";

export interface RoleHolders {
  roleHolders: User[];
  role: AssessmentRole;
}

export const setupAssessmentSessionRoleHolders = (
  session: AssessmentSession,
  roles: RoleHolders[]
): void => {
  roles.forEach(async (role: RoleHolders) => {
    await role.roleHolders.forEach(async (user: User) => {
      await assessmentRoleHolderService.create({
        assessmentRoleId: role.role.id,
        assessmentSessionId: session.id,
        userId: user.id,
      });
    });
  });
};
