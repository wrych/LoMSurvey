<template>
  <div class="levelselectorcontainer" v-if="props.dimension">
    <div class="info-container">
      <span
        >Please select your mastery in the dimension
        {{ props.dimension.title }} with the slider on the right hand
        side.</span
      >
    </div>
    <div class="descriptioncontainer">
      <LevelDescription
        v-model="value"
        :dimension="props.dimension"
        :levels="props.levels"
      />
    </div>
    <div class="slidercontainer">
      <LevelSlider v-model="value" />
      <NumberInput v-model="value" class="number" label="Mastery" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LevelSlider from "./LevelSlider.vue";
import NumberInput from "./NumberInput.vue";
import LevelDescription from "./LevelDescription.vue";
import { Assessment } from "@/models/Assessment";
import { AssessmentSession } from "@/models/AssessmentSession";
import { Dimension } from "@/models/Dimension";
import { useRoute } from "vue-router";
import type { Levels } from "@/models/Level";

const route = useRoute();

const value = defineModel();
const props = defineProps<{
  assessment: Assessment | undefined;
  assessmentSession: AssessmentSession | undefined;
  dimension: Dimension | undefined;
  levels: Levels | undefined;
}>();
</script>

<style scoped>
.levelselectorcontainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: min-content 1fr;
}

.descriptioncontainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slidercontainer {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  width: 100%;
  height: 100%;
}

.info-container {
  grid-column-start: 1;
  grid-column-end: 3;
  height: min-content;
}

.number {
  height: 30px;
}
</style>
