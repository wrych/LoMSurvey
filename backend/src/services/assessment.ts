import Assessment, { AssessmentAttributes } from "@/models/Assessment.js";

const create = async (
  assessment: AssessmentAttributes
): Promise<Assessment> => {
  const newAssessment = await Assessment.create(assessment);
  return newAssessment;
};

export { create };
