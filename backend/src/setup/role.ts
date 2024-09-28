import { create } from "@/services/role.js";

export const setupRoles = async (): Promise<void> => {
  await create({
    title: "admin",
    description: "administrator",
  });
  await create({
    title: "assessee",
    description: "person being assessed",
  });
  await create({
    title: "peer",
    description: "peer of the person being assessed",
  });
  await create({
    title: "delegator",
    description: "delegator of the person being assessed",
  });
  await create({
    title: "purposeMember",
    description: "member of the purpose team",
  });
};
