import AssessmentRole from "../models/AssessmentRole.js";
import User from "../models/User.js";
import * as assessmentRoleHolderService from "../services/assessmentRoleHolder.js";

export interface RoleHolders {
  roleHolders: User[];
  role: AssessmentRole;
}

export const setupAssessmentRoleHolders = (roles: RoleHolders[]): void => {
  roles.forEach(async (role: RoleHolders) => {
    await role.roleHolders.forEach(async (user: User) => {
      await assessmentRoleHolderService.create({
        assessmentRoleId: role.role.id,
        userId: user.id,
      });
    });
  });
};
