import AssessmentRole, {
  AssessmentRoleAttributes,
} from "../models/AssessmentRole.js";

const create = async (
  role: AssessmentRoleAttributes
): Promise<AssessmentRole> => {
  const newRole = await AssessmentRole.create(role);
  return newRole;
};

export { create };
