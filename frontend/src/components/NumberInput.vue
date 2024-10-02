<template>
  <div class="number-input" v-if="value">
    <label v-if="label" for="value">{{ props.label }}</label>
    <input
      type="number"
      :value="parseFloat(value).toFixed(props.decimals)"
      @change="updateValue"
      min="0"
      max="100"
      class="value"
      id="value"
    />
  </div>
</template>

<script setup lang="ts">
import type { ModelRef } from "vue";

const props = defineProps({
  decimals: {
    type: Number,
    default: 1,
  },
  label: {
    type: String,
    default: "",
  },
});
const value: ModelRef<string | undefined> = defineModel();

const updateValue = (event: Event): void => {
  if (!event.target) {
    console.warn(`Unexpected event (${event}) without target.`);
    return;
  }
  const input = event.target as HTMLInputElement;
  value.value = input.value;
};
</script>

<style scoped>
.number-input {
  display: grid;
}
input {
  background: none;
  border: solid 1px var(--color-border);
  color: var(--color-text);
}
input:hover {
  border: solid 1px var(--color-border-hover);
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
  position: relative;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]::-moz-inner-spin-button {
  display: none;
}
</style>
