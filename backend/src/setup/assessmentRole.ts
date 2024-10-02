import { create } from "@/services/assessmentRole.js";

export const setupAssessmentRoles = async (): Promise<void> => {
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
