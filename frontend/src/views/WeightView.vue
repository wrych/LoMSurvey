<template>
  <main>
    <div class="main">
      <h2 class="highlight">Dimension Weights</h2>
      <span>
        Please assess how much each dimension matters for your specific role and
        position in the company.
      </span>
      <br />
      <br />
      <div>
        <SliderWithValue
          v-for="dimension in dimensions"
          :label="`Dimension ${dimension.name}`"
          v-model.number="weights[dimension.id as dimensionId]"
        />
      </div>
      Please provide the reasoning for your weights.
      <textarea
        class="reasoning"
        v-model="reasonings.weights"
        placeholder="Please provide reasoning for your weights..."
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import SliderWithValue from "@/components/SliderWithValue.vue";
import { watch, nextTick } from "vue";
import dimensions, {
  weights,
  reasonings,
  type dimensionId,
} from "@/dimensions";

let disableWatch = false;

const requireChange = (weightIndex: string, change: number): number => {
  const currentValue = weights.value[weightIndex as dimensionId];
  if (!currentValue) {
    throw Error("weights must not be undefined");
  }
  const calcValue = currentValue + change;
  const value = Math.min(Math.max(calcValue, 0), 100);
  weights.value[weightIndex as dimensionId] = value;
  return calcValue - value;
};

const changeValue = (changeableWeights: string[], change: number): void => {
  if (change === 0) return;
  let remainder = 0;
  let changeable: string[] = [];
  let step = change / changeableWeights.length;
  changeableWeights.forEach((w) => {
    const r = requireChange(w, step);
    if (r === 0) {
      changeable.push(w);
    } else {
      remainder += r;
    }
  });
  changeValue(changeable, remainder);
};

for (let w in weights.value) {
  watch(
    () => weights.value[w as dimensionId],
    (newValue, oldValue) => {
      if (!newValue || !oldValue) {
        throw Error("weights must not be undefined");
      }
      if (disableWatch) return;
      disableWatch = true;
      const change = oldValue - newValue;
      const changeable = Object.keys(weights.value).filter((key) => key !== w);
      changeValue(changeable, change);
      nextTick(() => {
        disableWatch = false;
      });
    }
  );
}
</script>

<style>
.main {
  width: 100%;
  max-width: 581px;
  max-height: 100vh;
  position: relative;
}

.reasoning {
  width: 100%;
  min-height: 150px;
  border-color: var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
}
</style>
