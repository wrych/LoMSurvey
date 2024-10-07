import AssessmentRole from "@/models/AssessmentRole.js";
import AssessmentRoleHolder, {
  AssessmentRoleHolderAttributes,
} from "@/models/AssessmentRoleHolder.js";

export const create = async (
  assessmentRoleHolder: AssessmentRoleHolderAttributes
): Promise<AssessmentRoleHolder> => {
  const newRoleHolder = await AssessmentRoleHolder.create(assessmentRoleHolder);
  return newRoleHolder;
};

interface AssessmentRoleHolderWithRole extends AssessmentRoleHolder {
  AssessmentRole: AssessmentRole;
}

export const getAssessmentRoleByUserId = async (userId: number) => {
  const roles = (await AssessmentRoleHolder.findAll({
    where: { userId: userId },
    include: {
      model: AssessmentRole,
      attributes: ["title", "description"],
    },
  })) as AssessmentRoleHolderWithRole[];
  return roles.map((roleHolder) => ({
    id: roleHolder.id,
    assessmentRoleId: roleHolder.assessmentRoleId,
    title: roleHolder.AssessmentRole.title,
    description: roleHolder.AssessmentRole.description,
    userId: roleHolder.userId,
  }));
};
