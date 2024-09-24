<script setup lang="ts">
import LevelSelector from "@/components/LevelSelector.vue";
import { useRoute } from "vue-router";
import dimensions, { values, type dimensionId } from "@/dimensions";
import { ref, toRef, watch } from "vue";

const route = useRoute();
const dimension = ref<{} | undefined>(undefined);
let value = ref<number | undefined>(undefined);

const updateRefs = () => {
  const id = route.params.id;
  dimension.value = dimensions.find((d) => d.id === id);
  value = toRef(values.value, id as dimensionId);
};

watch(() => route.params.id, updateRefs, { immediate: true });
</script>

<template>
  <main>
    <LevelSelector v-if="dimension" :dimension="dimension" v-model="value" />
    <div v-else>Error!</div>
  </main>
</template>
