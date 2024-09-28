import Assessment from "@/models/Assessment.js";
import { create } from "@/services/assessment.js";
import * as stateService from "@/services/state.js";

export const setupAssessment = async (): Promise<Assessment> => {
  const initialState = await stateService.getInitialState();
  return await create({
    title: "Q4'2024",
    stateId: initialState.id,
  });
};
