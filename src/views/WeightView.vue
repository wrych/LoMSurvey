<template>
  <div class="about">
    <div class="main">
      <h1>Hello World!</h1>
      <div>
        <SliderWithValue
          v-for="dimension in dimensions"
          :label="`Dimension ${dimension.name} (${dimension.id})`"
          v-model="weights[dimension.id].value"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderWithValue from "@/components/SliderWithValue.vue";
import { watch, ref, nextTick, type Ref } from "vue";
import dimensions, { weights } from "@/dimensions";
interface Dimension {
  value: number;
  name: string;
  short: string;
}

let disableWatch = false;

const requireChange = (dimension: Dimension, change: number): number => {
  const calcValue = parseFloat(dimension.value) + change;
  const value = Math.min(Math.max(calcValue, 0), 100);
  dimension.value = value;
  return calcValue - value;
};

const changeValue = (changeableWeights: Dimension[], change: number): void => {
  if (change === 0) return;
  let remainder = 0;
  let changeable: Dimension[] = [];
  let step = change / changeableWeights.length;
  changeableWeights.forEach((d) => {
    const r = requireChange(d, step);
    if (r === 0) {
      changeable.push(d);
    } else {
      remainder += r;
    }
  });
  changeValue(changeable, remainder);
};

for (let w in weights) {
  watch(
    () => weights[w],
    (newValue, oldValue) => {
      if (disableWatch) return;
      disableWatch = true;
      const change = oldValue - newValue;
      const changeable = Object.fromEntries(Object.entries(weights).filter(
        ([key, value]) => key !== value
      );
      changeValue(changeable, change);
      nextTick(() => {
        disableWatch = false;
      });
    }
  );
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
  }
}
</style>
