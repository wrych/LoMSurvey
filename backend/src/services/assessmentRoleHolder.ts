import User from "src/models/User.js";
import AssessmentRole from "../models/AssessmentRole.js";
import AssessmentRoleHolder, {
  AssessmentRoleHolderAttributes,
} from "../models/AssessmentSessionRoleHolder.js";
import Permission from "src/models/Permission.js";
import State from "src/models/State.js";
import * as assessmentSessionService from "./assessmentSession.js";
import { off } from "process";

export const create = async (
  assessmentRoleHolder: AssessmentRoleHolderAttributes
): Promise<AssessmentRoleHolder> => {
  const newRoleHolder = await AssessmentRoleHolder.create(assessmentRoleHolder);
  return newRoleHolder;
};

interface AssessmentRoleHolderWithRole extends AssessmentRoleHolder {
  AssessmentRole: AssessmentRole;
}

export const getRoleHolders = async (assessmentSessionId: number) => {
  const roleHolders = await AssessmentRoleHolder.findAll({
    where: { assessmentSessionId: assessmentSessionId },
    include: [
      {
        model: AssessmentRole,
        attributes: ["title", "description"],
      },
      {
        model: User,
        attributes: ["email", "familyName", "givenName"],
      },
    ],
  });
  return roleHolders;
};

interface AssessmentRoleWithPermission extends AssessmentRole {
  Permissions: Permission[];
}

interface AssessmentRoleHolderWithPermission extends AssessmentRoleHolder {
  AssessmentSessionRole?: AssessmentRoleWithPermission;
}

export const getPermissions = async (
  assessmentSessionId: number,
  userId: number
) => {
  const state = await assessmentSessionService.getState(assessmentSessionId);
  const roles = (await AssessmentRoleHolder.findAll({
    where: { assessmentSessionId: assessmentSessionId, userId: userId },
    include: [
      {
        model: AssessmentRole,
        include: [
          {
            model: Permission,
            where: { stateId: state },
          },
        ],
      },
    ],
  })) as AssessmentRoleHolderWithPermission[];
  const [canView, canEdit] = roles.reduce(
    ([canView, canEdit], role) => {
      return [
        canView ||
          role.AssessmentSessionRole?.Permissions.reduce(
            (acc, perm) => acc || perm.can_view,
            false
          ) ||
          false,
        canEdit ||
          role.AssessmentSessionRole?.Permissions.reduce(
            (acc, perm) => acc || perm.can_edit,
            false
          ) ||
          false,
      ];
    },
    [false, false]
  );
  return { canView: canView, canEdit: canEdit };
};
