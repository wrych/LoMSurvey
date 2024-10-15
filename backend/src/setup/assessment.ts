import Assessment from "../models/Assessment.js";
import { create } from "../services/assessment.js";

export const setupAssessment = async (): Promise<Assessment[]> => {
  const q4 = await create({
    title: "Q4'2024",
  });
  const dryRun = await create({
    title: "dry runs",
  });
  return [dryRun, q4];
};
