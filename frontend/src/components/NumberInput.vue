<template>
  <div class="number-input">
    <label v-if="label" for="value">{{ props.label }}</label>
    <input
      type="number"
      :value="currentValue"
      @change="updateValue"
      class="value"
      id="value"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type ModelRef } from "vue";

const props = defineProps({
  decimals: {
    type: Number,
    default: 1,
  },
  label: {
    type: String,
    default: "",
  },
  default: {
    type: Number,
    default: 8.0,
  },
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
});
const value: ModelRef<number | null | undefined> = defineModel();
const currentValue = computed(() =>
  (value.value || props.default).toFixed(props.decimals)
);

const updateValue = (event: Event): void => {
  if (!event.target) {
    console.warn(`Unexpected event (${event}) without target.`);
    return;
  }
  const input = event.target as HTMLInputElement;
  const v = parseFloat(input.value);
  if (
    isNaN(v) ||
    (props.min && v < props.min) ||
    (props.max && v > props.max)
  ) {
    console.warn(`Unexpected value provided or outside range: ${input.value}`);
    input.value = currentValue.value;
    return;
  }
  value.value = v;
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
