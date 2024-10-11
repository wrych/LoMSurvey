import { State, States } from "@/models/State";
import { getJson, postJson } from "./common";
import { Assessment, Assessments } from "@/models/Assessment";
import { AssessmentSession } from "@/models/AssessmentSession";
import { Dimension, Dimensions } from "@/models/Dimension";
import { Level, Levels, type LevelDTO } from "@/models/Level";

export const getAllStates = async (): Promise<States> => {
  return States.fromJSON((await getJson("/api/assessment/states")) as State[]);
};

export const getAllAssessments = async (): Promise<Assessments> => {
  return Assessments.fromJSON(await getJson<Assessment[]>("/api/assessment/"));
};

export const getAssessment = async (id: number): Promise<Assessment> => {
  return Assessment.fromJSON(
    await getJson<Assessment>(`/api/assessment/${id}`)
  );
};

export const getAssessmentSession = async (
  id: number
): Promise<AssessmentSession> => {
  return AssessmentSession.fromJSON(
    await getJson<AssessmentSession>(`/api/assessment-session/${id}`)
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
