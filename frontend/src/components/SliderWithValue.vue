<template>
  <div class="container">
    <div class="labelcontainer">
      <label for="ranger">
        {{ props.label }}
      </label>
    </div>
    <div class="slidecontainer">
      <input
        type="range"
        :value="value"
        @change="updatemodel"
        @mouseup="updatemodel"
        :min="props.min"
        :max="props.max"
        class="slider"
        id="myRange"
      />
    </div>
    <div class="valuecontainer">
      <NumberInput v-model="model" :decimals="2" :default="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import NumberInput from "./NumberInput.vue";

const model = defineModel();
const props = defineProps({
  label: String,
  default: {
    type: Number,
    default: 100,
  },
  min: {
    type: Number,
    default: 50,
  },
  max: {
    type: Number,
    default: 100,
  },
});

const value = computed(() => {
  if (!model.value) {
    return props.default;
  }
  return model.value;
});

const updatemodel = (event: Event) => {
  if (!event.target) {
    console.warn("event.target is null");
    return;
  }
  const input = event.target as HTMLInputElement;
  model.value = parseFloat(input.value);
};
</script>

<style scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 5px;
}
.labelcontainer {
  grid-column-start: 1;
  grid-column-end: 3;
}
.slider {
  width: 100%;
}
.value {
  width: 100%;
}
</style>
