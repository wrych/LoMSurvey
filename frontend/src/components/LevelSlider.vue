<template>
  <input
    :value="value"
    @input="updatemodel"
    type="range"
    :min="props.min * 10"
    :max="props.max * 10"
    class="slider"
  />
</template>

<script setup lang="ts">
import { computed, type ModelRef } from "vue";

const model: ModelRef<number | undefined> = defineModel();

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10,
  },
  default: {
    type: Number,
    default: 8.0,
  },
});

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
    return props.default * 10;
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
