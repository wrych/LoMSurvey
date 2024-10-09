import type { Assessments } from "@/models/Assessment";
import { AssessmentSessions } from "@/models/AssessmentSession";
import type { Dimensions } from "@/models/Dimension";
import type { Levels } from "@/models/Level";
import type { States } from "@/models/State";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAssessmentStore = defineStore("assessment", () => {
  const states = ref<States | undefined>(undefined);
  const assessments = ref<Assessments | undefined>(undefined);
  const assessmentSessions = ref<AssessmentSessions | undefined>(undefined);
  const dimensions = ref<Dimensions | undefined>(undefined);
  const levels = ref<Levels | undefined>(undefined);

  return { states, assessments, assessmentSessions, dimensions, levels };
});
