import Permission, { PermissionAttributes } from "src/models/Permission";

const create = async (
  permission: PermissionAttributes
): Promise<Permission> => {
  const newPermission = await Permission.create(permission);
  return newPermission;
};

export { create };
