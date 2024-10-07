import AssessmentRole from "@/models/AssessmentRole.js";
import { create } from "@/services/assessmentRole.js";

export const setupAssessmentRoles = async (): Promise<AssessmentRole[]> => {
  return [
    await create({
      title: "assessee",
      description: "person being assessed",
    }),
    await create({
      title: "peer",
      description: "peer of the person being assessed",
    }),
    await create({
      title: "delegator",
      description: "delegator of the person being assessed",
    }),
    await create({
      title: "purposeMember",
      description: "member of the purpose team",
    }),
  ];
};
