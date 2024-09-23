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
        v-model="model"
        min="0"
        max="100"
        class="slider"
        id="myRange"
      />
    </div>
    <div class="valuecontainer">
      <NumberInput v-model="model" :decimals="2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NumberInput from "./NumberInput.vue";

const model = defineModel();
const props = defineProps({
  label: String,
});
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
