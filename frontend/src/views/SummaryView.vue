<template>
  <main>
    <div class="main">
      <h2 class="highlight">Level of Mastery (LoM)</h2>
      <div class="valuecontainer">
        <span>Overall:</span>
        <span class="highlight lom">{{ overallLom }}</span>
      </div>
      <div v-for="d in dimensions" class="dimensioncontainer">
        <h3>{{ d.name }}</h3>
        <div class="valuecontainer">
          <span>Level:</span>
          <span>{{ values[d.id as dimensionId]?.toFixed(1) }}</span>
          <span>Weight:</span>
          <span>{{ weights[d.id as dimensionId]?.toFixed(1) }}</span>
        </div>
        <h4 class="space-before">Reasoning</h4>
        <span class="reasoning">{{
          reasoning_texts[d.id as dimensionWeightId]
        }}</span>
      </div>
      <h3>Weights</h3>
      <div v-for="d in dimensions" class="weightcontainer">
        <span> {{ d.name }}</span>
        <span> {{ weights[d.id as dimensionId] }} </span>
      </div>
      <h4>Reasoning</h4>
      <span class="reasoning"> {{ reasoning_texts["weights"] }} </span>
    </div>
  </main>
</template>

<script setup lang="ts">
import dimensions, {
  reasonings,
  weights,
  values,
  type dimensionWeightId,
  type Dimension,
  type dimensionId,
} from "@/dimensions";
import { computed } from "vue";
const overallLom = computed(() => {
  return dimensions
    .reduce((prev: number, e: Dimension) => {
      const v = values.value[e.id as dimensionId];
      const w = weights.value[e.id as dimensionId];
      if (!v || !w) {
        console.warn("weights and values must not be undefined");
        return 0;
      }
      return prev + (v * w) / 100;
    }, 0.0)
    .toFixed(1);
});

const reasoning_texts = computed(() => {
  type TextType = Record<dimensionWeightId, string | undefined>;
  const texts: TextType = {} as TextType;
  (Object.keys(reasonings.value) as dimensionWeightId[]).forEach((key) => {
    texts[key as dimensionWeightId] = reasonings.value[key as dimensionWeightId]
      ? reasonings.value[key as dimensionWeightId]
      : "No reasoning provided...";
  });
  return texts;
});
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 581px;
  height: 100vh;
  position: relative;
}
h2,
h3 {
  padding-top: 20px;
}
.space-before {
  padding-top: 40px;
}
.dimensioncontainer {
  position: relative;
}
.valuecontainer {
  padding-top: 20px;
  width: 200px;
  position: absolute;
  top: 0px;
  right: 0px;
  display: grid;
  grid-template-columns: 4fr 2fr;
  align-items: end;
}
.weightcontainer {
  width: 400px;
  display: grid;
  grid-template-columns: 5fr 1fr;
}
.lom {
  font-size: xx-large;
  font-weight: 700;
}
.reasoning {
  white-space: pre-wrap;
}
</style>
