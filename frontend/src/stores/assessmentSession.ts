import type { LevelValue } from "@/models/LevelValue";
import type { LevelWeight } from "@/models/LevelWeight";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAssessmentSessionStore = defineStore(
  "assessmentSession",
  () => {
    const levelValues = ref<LevelValue[]>([]);
    const levelWeights = ref<LevelWeight[]>([]);

    return { levelValues, levelWeights };
  }
);
