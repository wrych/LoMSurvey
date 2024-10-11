import { State, States } from "@/models/State";
import { getJson, postJson } from "./common";
import { LevelValue } from "@/models/LevelValue";
import { ValueReasoning } from "@/models/ValueReasoning";
import { LevelWeight } from "@/models/LevelWeight";
import { WeightReasoning } from "@/models/WeightReasoning";

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

export const setLevel = async (level: LevelValue): Promise<LevelValue> => {
  return LevelValue.fromJSON(
    await postJson<LevelValue>(
      `/api/assessment-session/${level.assessmentSessionId}/dimension/${level.dimensionId}/level`,
      { value: level.value }
    )
  );
};

export const getWeight = async (
  assessmentSessionId: number,
  dimensionId: number
): Promise<LevelWeight | null> => {
  return LevelWeight.fromJSON(
    await getJson<LevelWeight>(
      `/api/assessment-session/${assessmentSessionId}/dimension/${dimensionId}/weight`
    )
  );
};

export const setWeight = async (weight: LevelWeight): Promise<LevelWeight> => {
  return LevelWeight.fromJSON(
    await postJson<LevelWeight>(
      `/api/assessment-session/${weight.assessmentSessionId}/dimension/${weight.dimensionId}/weight`,
      { value: weight.value }
    )
  );
};

export const getValueReasoning = async (
  assessmentSessionId: number,
  dimensionId: number
): Promise<ValueReasoning | null> => {
  return ValueReasoning.fromJSON(
    await getJson<ValueReasoning>(
      `/api/assessment-session/${assessmentSessionId}/dimension/${dimensionId}/reasoning`
    )
  );
};

export const setValueReasoning = async (
  reasoning: ValueReasoning
): Promise<ValueReasoning> => {
  return ValueReasoning.fromJSON(
    await postJson<ValueReasoning>(
      `/api/assessment-session/${reasoning.assessmentSessionId}/dimension/${reasoning.dimensionId}/reasoning`,
      { value: reasoning.text }
    )
  );
};

export const getWeightReasoning = async (
  assessmentSessionId: number
): Promise<WeightReasoning | null> => {
  return WeightReasoning.fromJSON(
    await getJson<WeightReasoning>(
      `/api/assessment-session/${assessmentSessionId}/weight-reasoning`
    )
  );
};

export const setWeightReasoning = async (
  reasoning: WeightReasoning
): Promise<WeightReasoning> => {
  return WeightReasoning.fromJSON(
    await postJson<WeightReasoning>(
      `/api/assessment-session/${reasoning.assessmentSessionId}/weight-reasoning`,
      { value: reasoning.text }
    )
  );
};
