import { useAssessmentSessionStore } from "@/stores/assessmentSession";
import { toRef, type Ref } from "vue";
import * as assessmentSessionApi from "@/apis/assessmentSession";
import { LevelValue } from "@/models/LevelValue";
import type { ValueReasoning } from "@/models/ValueReasoning";
import type { LevelWeight } from "@/models/LevelWeight";
import type { WeightReasoning } from "@/models/WeightReasoning";

export class AssessmentSessionRepository {
  private store = useAssessmentSessionStore();

  getWeightReasoning = (assessmentSessionId: number): Ref<WeightReasoning> => {
    if (!this.store.weightReasonings[assessmentSessionId]) {
      this.store.weightReasonings[assessmentSessionId] = {
        id: -1,
        assessmentSessionId,
        text: null,
      };
    }
    this.updateWeightReasoning(assessmentSessionId);
    return toRef(this.store.weightReasonings, assessmentSessionId);
  };

  updateWeightReasoning = async (
    assessmentSessionId: number
  ): Promise<void> => {
    const lv =
      await assessmentSessionApi.getWeightReasoning(assessmentSessionId);
    if (!lv) return;
    this.store.weightReasonings[assessmentSessionId] = lv;
  };

  getLevelWeight = (
    assessmentSessionId: number,
    dimensionId: number
  ): Ref<LevelWeight> => {
    const index = `${assessmentSessionId}_${dimensionId}`;
    if (!this.store.levelWeights[index]) {
      this.store.levelWeights[index] = {
        id: -1,
        assessmentSessionId,
        dimensionId,
        value: null,
      };
    }
    this.updateLevelWeight(assessmentSessionId, dimensionId, index);
    return toRef(this.store.levelWeights, index);
  };

  updateLevelWeight = async (
    assessmentSessionId: number,
    dimensionId: number,
    index: string
  ): Promise<void> => {
    const lv = await assessmentSessionApi.getWeight(
      assessmentSessionId,
      dimensionId
    );
    if (!lv) return;
    this.store.levelWeights[index] = lv;
  };

  getLevelValue = (
    assessmentSessionId: number,
    dimensionId: number
  ): Ref<LevelValue> => {
    const index = `${assessmentSessionId}_${dimensionId}`;
    if (!this.store.levelValues[index]) {
      this.store.levelValues[index] = {
        id: -1,
        assessmentSessionId,
        dimensionId,
        value: null,
      };
    }
    this.updateLevelValue(assessmentSessionId, dimensionId, index);
    return toRef(this.store.levelValues, index);
  };

  updateLevelValue = async (
    assessmentSessionId: number,
    dimensionId: number,
    index: string
  ): Promise<void> => {
    const lv = await assessmentSessionApi.getLevel(
      assessmentSessionId,
      dimensionId
    );
    if (!lv) return;
    this.store.levelValues[index] = lv;
  };

  getValueReasoning = (
    assessmentSessionId: number,
    dimensionId: number
  ): Ref<ValueReasoning> => {
    const index = `${assessmentSessionId}_${dimensionId}`;
    if (!this.store.valueReasonings[index]) {
      this.store.valueReasonings[index] = {
        id: -1,
        assessmentSessionId,
        dimensionId,
        text: null,
      };
    }
    this.updateValueReasoning(assessmentSessionId, dimensionId, index);
    return toRef(this.store.valueReasonings, index);
  };

  updateValueReasoning = async (
    assessmentSessionId: number,
    dimensionId: number,
    index: string
  ): Promise<void> => {
    const lv = await assessmentSessionApi.getValueReasoning(
      assessmentSessionId,
      dimensionId
    );
    if (!lv) return;
    this.store.valueReasonings[index] = lv;
  };
}
let assessmentSessionRepository: AssessmentSessionRepository | null = null;

export const useAssessmentSessionRepository =
  (): AssessmentSessionRepository => {
    if (!assessmentSessionRepository) {
      assessmentSessionRepository = new AssessmentSessionRepository();
    }
    return assessmentSessionRepository;
  };
