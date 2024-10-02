import { State, States } from "@/models/State";
import { getJson, postJson } from "./common";
import { Assessment, Assessments } from "@/models/Assessment";

export const getAllStates = async (): Promise<States> => {
  return States.fromJSON((await getJson("/api/assessment/states")) as State[]);
};

export const getAllAssessments = async (): Promise<Assessments> => {
  return Assessments.fromJSON(
    (await getJson("/api/assessment/")) as Assessment[]
  );
};
