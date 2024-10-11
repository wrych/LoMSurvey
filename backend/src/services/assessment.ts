import Assessment, { AssessmentAttributes } from "../models/Assessment.js";

export const findAll = async (): Promise<Assessment[]> => {
  const assessments: Assessment[] = await Assessment.findAll();
  return assessments;
};

export const findById = async (id: number): Promise<Assessment | null> => {
  const assessment: Assessment | null = await Assessment.findByPk(id);
  return assessment;
};

const create = async (
  assessment: AssessmentAttributes
): Promise<Assessment> => {
  const newAssessment = await Assessment.create(assessment);
  return newAssessment;
};

export { create };
