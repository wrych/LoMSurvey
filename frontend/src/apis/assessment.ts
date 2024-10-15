import { getJson } from "./common";
import { Assessment, Assessments } from "@/models/Assessment";
import { Dimension, Dimensions } from "@/models/Dimension";
import { Levels, type LevelDTO } from "@/models/Level";

export const getAllAssessments = async (): Promise<Assessments> => {
  return Assessments.fromJSON(await getJson<Assessment[]>("/api/assessment/"));
};

export const getAssessment = async (id: number): Promise<Assessment> => {
  return Assessment.fromJSON(
    await getJson<Assessment>(`/api/assessment/${id}`)
  );
};

export const getDimension = async (id: number): Promise<Dimension> => {
  return Dimension.fromJSON(await getJson<Dimension>(`/api/dimension/${id}`));
};

export const getDimensionsByAssessmentId = async (
  assessmentId: number
): Promise<Dimensions> => {
  return Dimensions.fromJSON(
    await getJson<Dimension[]>(`/api/assessment/${assessmentId}/dimensions`)
  );
};

export const getLevelsByDimensionId = async (
  dimensionId: number
): Promise<Levels> => {
  return Levels.fromJSON(
    await getJson<LevelDTO[]>(`/api/assessment/dimension/${dimensionId}/levels`)
  );
};
