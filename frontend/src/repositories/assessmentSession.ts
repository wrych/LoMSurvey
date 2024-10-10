import { useAssessmentSessionStore } from "@/stores/assessmentSession";
import { toRef, type Ref } from "vue";
import * as assessmentSessionApi from "@/apis/assessmentSession";
import type { LevelValue } from "@/models/LevelValue";

export class AssessmentSessionRepository {
  private store = useAssessmentSessionStore();

  getLevelValue = (
    assessmentSessionId: number,
    dimensionId: number
  ): Ref<LevelValue> => {
    const levelValue = this.store.levelValues.find(
      (lv) =>
        lv.assessmentSessionId === assessmentSessionId &&
        lv.dimensionId === dimensionId
    );
    if (!levelValue) {
      this.store.levelValues.push({
        assessmentSessionId,
        dimensionId,
        value: null,
      });
    }
    const index = this.store.levelValues.findIndex(
      (lv) =>
        lv.assessmentSessionId === assessmentSessionId &&
        lv.dimensionId === dimensionId
    );
    const value = toRef(this.store.levelValues, index);
    this.updateLevelValue(assessmentSessionId, dimensionId, value);
    return value;
  };

  updateLevelValue = async (
    assessmentSessionId: number,
    dimensionId: number,
    value: Ref<LevelValue>
  ): Promise<void> => {
    const lv = await assessmentSessionApi.getLevel(
      assessmentSessionId,
      dimensionId
    );
    if (!lv) {
      throw new Error("Level value not found");
    }
    value.value = lv;
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
