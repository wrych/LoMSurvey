<template>
  <input
    :value="value"
    @input="updatemodel"
    type="range"
    min="40"
    max="120"
    class="slider"
  />
</template>

<script setup lang="ts">
import { computed, type ModelRef } from "vue";

const model: ModelRef<number | undefined> = defineModel();

const updatemodel = (event: Event) => {
  if (!event.target) {
    console.warn("event.target is null");
    return;
  }
  const input = event.target as HTMLInputElement;
  model.value = parseFloat(input.value) / 10;
};

const value = computed(() => {
  if (!model.value) {
    console.warn("unexpected undefined value provided");
    return model.value;
  }
  return `${model.value * 10}`;
});
</script>

<style scoped>
.slider {
  writing-mode: vertical-lr;
  direction: rtl;
  height: 100%;
}
</style>
