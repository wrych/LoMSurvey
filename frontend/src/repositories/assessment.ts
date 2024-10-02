import { toRef } from "vue";
import type { Ref } from "vue";

import { useAssessmentStore } from "@/stores/assessment";
import type { States } from "@/models/State";
import * as assessmentApi from "@/apis/assessment";
import type { Assessments } from "@/models/Assessment";

export class AssessmentRepository {
  private store = useAssessmentStore();

  getAllStates = (initOnly: boolean = false): Ref<States | undefined> => {
    if (this.store.states === undefined && !initOnly) {
      this.updateStates();
    }
    return toRef(this.store, "states");
  };

  updateStates = async (): Promise<void> => {
    this.store.states = await assessmentApi.getAllStates();
  };

  getAllAssessments = (
    initOnly: boolean = false
  ): Ref<Assessments | undefined> => {
    if (this.store.assessments === undefined) {
      this.updateAssessments();
    }
    return toRef(this.store, "assessments");
  };

  updateAssessments = async (): Promise<void> => {
    this.store.assessments = await assessmentApi.getAllAssessments();
  };
}

let assessmentRepository: AssessmentRepository | null = null;

export const useAssessmentRepository = (): AssessmentRepository => {
  if (!assessmentRepository) {
    assessmentRepository = new AssessmentRepository();
  }
  return assessmentRepository;
};
