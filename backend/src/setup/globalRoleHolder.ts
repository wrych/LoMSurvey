import GlobalRole from "../models/GlobalRole.js";
import User from "../models/User.js";
import { create } from "../services/globalRoleHolder.js";

export const setupGlobalRoleHolder = async (user: User, role: GlobalRole) => {
  await create({ userId: user.id, globalRoleId: role.id });
};
