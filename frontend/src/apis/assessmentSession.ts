import { State, States } from "@/models/State";
import { getJson, postJson } from "./common";
import { LevelValue } from "@/models/LevelValue";

export const getLevel = async (
  assessmentSessionId: number,
  dimensionId: number
): Promise<LevelValue | null> => {
  return LevelValue.fromJSON(
    await getJson<LevelValue>(
      `/api/assessment-session/${assessmentSessionId}/dimension/${dimensionId}/level`
    )
  );
};
