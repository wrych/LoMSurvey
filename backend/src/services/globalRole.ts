import GlobalRole, { GlobalRoleAttributes } from "../models/GlobalRole.js";

const create = async (role: GlobalRoleAttributes): Promise<GlobalRole> => {
  const newRole = await GlobalRole.create(role);
  return newRole;
};

export { create };
