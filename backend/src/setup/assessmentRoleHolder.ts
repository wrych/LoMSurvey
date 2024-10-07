import AssessmentRole from "@/models/AssessmentRole.js";
import AssessmentSession from "@/models/AssessmentSession.js";
import User from "@/models/User.js";
import * as assessmentRoleHolderService from "@/services/assessmentRoleHolder.js";

export interface RoleHolders {
  roleHolders: User | User[];
  role: AssessmentRole;
}

export const setupAssessmentRoleHolders = (
  session: AssessmentSession,
  roles: RoleHolders[]
): void => {
  roles.forEach(async (role: RoleHolders) => {
    if (role.roleHolders instanceof Array) {
      await role.roleHolders.forEach(async (user: User) => {
        await assessmentRoleHolderService.create({
          assessmentSessionId: session.id,
          assessmentRoleId: role.role.id,
          userId: user.id,
        });
      });
    }
  });
};
