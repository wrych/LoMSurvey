import GlobalRole from "@/models/GlobalRole.js";
import GlobalRoleHolder, {
  GlobalRoleHolderAttributes,
} from "@/models/GlobalRoleHolder.js";

export const create = async (
  globalRoleHolder: GlobalRoleHolderAttributes
): Promise<GlobalRoleHolder> => {
  const newRoleHolder = await GlobalRoleHolder.create(globalRoleHolder);
  return newRoleHolder;
};

interface GlobalRoleHolderWithRole extends GlobalRoleHolder {
  GlobalRole: GlobalRole;
}

export const getGlobalRoleByUserId = async (userId: number) => {
  const roles = (await GlobalRoleHolder.findAll({
    where: { userId: userId },
    include: {
      model: GlobalRole,
      attributes: ["title", "description"],
    },
  })) as GlobalRoleHolderWithRole[];
  return roles.map((roleHolder) => ({
    id: roleHolder.id,
    globalRoleId: roleHolder.globalRoleId,
    title: roleHolder.GlobalRole.title,
    description: roleHolder.GlobalRole.description,
    userId: roleHolder.userId,
  }));
};
