import { State, States } from "@/models/State";
import { getJson, postJson } from "./common";
import { Assessment, Assessments } from "@/models/Assessment";
import { AssessmentSession } from "@/models/AssessmentSession";

export const getAllStates = async (): Promise<States> => {
  return States.fromJSON((await getJson("/api/assessment/states")) as State[]);
};

export const getAllAssessments = async (): Promise<Assessments> => {
  return Assessments.fromJSON(await getJson<Assessment[]>("/api/assessment/"));
};

export const getAssessmentSession = async (
  id: number
): Promise<AssessmentSession> => {
  return AssessmentSession.fromJSON(
    await getJson<AssessmentSession>(`/api/assessment-session/${id}`)
  );
};
