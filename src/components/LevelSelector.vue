<template>
  <div class="levelselectorcontainer">
    <LevelDescriptions
      v-model="value"
      :dimension="props.dimension"
      :language="language"
    />
    <div class="slidercontainer">
      <LevelSlider v-model="value" :max="max" />
      <NumberInput v-model="value" class="number" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LevelSlider from "./LevelSlider.vue";
import NumberInput from "./NumberInput.vue";
import LevelDescriptions from "./LevelDescriptions.vue";
import { type Dimension } from "@/dimensions";
import { computed, type PropType } from "vue";
import * as textblocks from "@/textblocks";

const value = defineModel();
const props = defineProps({
  dimension: {
    type: Object as PropType<Dimension>,
    required: true,
  },
  language: {
    type: String as PropType<textblocks.languageIndicies>,
    required: true,
  },
});
const max = computed(() =>
  Math.max(...props.dimension.levels.map((l: { value: number }) => l.value))
);
</script>

<style scoped>
.levelselectorcontainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 10px;
}
.slidercontainer {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  width: 100%;
  height: 100%;
}
.number {
  height: 30px;
}
</style>
