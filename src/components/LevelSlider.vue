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
import { computed } from "vue";

const model = defineModel();

const updatemodel = (event: Event) => {
  model.value = event.target.value / 10;
};

const value = computed(() => {
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
