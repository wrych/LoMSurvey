<template>
  <div class="levelselectorcontianer">
    <div class="titlecontainer">
      <h2 class="highlight">Dimension {{ props.dimension.name }}</h2>
      <span
        >Please select your mastery in the dimension
        {{ props.dimension.name }} with the slider on the right hand side.</span
      >
    </div>
    <div>
      <LevelDescription v-model="value" :dimension="props.dimension" />
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
import { type Dimension } from "@/dimensions";
import type { PropType } from "vue";

const value = defineModel();
const props = defineProps({
  dimension: {
    type: Object as PropType<Dimension>,
    required: true,
  },
});
</script>

<style scoped>
.levelselectorcontianer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: min-content 1fr;
}
.descriptioncontainer {
  background-color: blueviolet;
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
.titlecontainer {
  grid-column-start: 1;
  grid-column-end: 3;
  height: min-content;
}
.number {
  height: 30px;
}
</style>
