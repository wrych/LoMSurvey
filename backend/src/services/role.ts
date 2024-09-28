import Role, { RoleAttributes } from "../models/Role.js";

const create = async (role: RoleAttributes): Promise<Role> => {
  const newRole = await Role.create(role);
  return newRole;
};

export { create };
