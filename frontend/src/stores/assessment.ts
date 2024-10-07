import type { Assessments } from "@/models/Assessment";
import { AssessmentSessions } from "@/models/AssessmentSession";
import type { States } from "@/models/State";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAssessmentStore = defineStore("assessment", () => {
  const states = ref<States | undefined>(undefined);
  const assessments = ref<Assessments | undefined>(undefined);
  const assessmentSessions = ref<AssessmentSessions | undefined>(undefined);
  return { states, assessments, assessmentSessions };
});
