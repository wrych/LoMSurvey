<template>
  <input
    type="number"
    :value="parseFloat(value).toFixed(props.decimals)"
    @change="value = $event.target.value"
    min="0"
    max="100"
    class="value"
    id="myValue"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  decimals: {
    type: Number,
    default: 1,
  },
});
const value = defineModel();
</script>

<style scoped>
input {
  background: none;
  border: solid 1px var(--color-border);
  color: var(--color-text);
}
input:hover {
  border: solid 1px var(--color-border-hover);
}
input[type="number"] {
  -moz-appearance: textfield; /* For Firefox */
  appearance: textfield; /* For Chrome, Edge, and Safari */
  position: relative;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none; /* Hides the default spinner in WebKit browsers */
}

input[type="number"]::-moz-inner-spin-button {
  display: none; /* Hides the default spinner in Firefox */
}
</style>
