import type { LevelValue } from "@/models/LevelValue";
import type { LevelWeight } from "@/models/LevelWeight";
import type { ValueReasoning } from "@/models/ValueReasoning";
import type { WeightReasoning } from "@/models/WeightReasoning";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAssessmentSessionStore = defineStore(
  "assessmentSession",
  () => {
    const levelValues = ref<Record<string, LevelValue>>({});
    const valueReasonings = ref<Record<string, ValueReasoning>>({});
    const levelWeights = ref<Record<string, LevelWeight>>({});
    const weightReasonings = ref<Record<number, WeightReasoning>>({});

    return { levelValues, levelWeights, valueReasonings, weightReasonings };
  }
);
