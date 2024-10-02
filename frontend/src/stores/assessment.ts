import type { Assessments } from "@/models/Assessment";
import type { States } from "@/models/State";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAssessmentStore = defineStore("assessment", () => {
  const states = ref<States | undefined>(undefined);
  const assessments = ref<Assessments | undefined>(undefined);
  return { states, assessments };
});
