import GlobalRole from "@/models/GlobalRole.js";
import { create } from "@/services/globalRole.js";

export const setupGlobalRoles = async (): Promise<GlobalRole> => {
  return await create({
    title: "admin",
    description: "with great power comes great responsibility",
  });
};
