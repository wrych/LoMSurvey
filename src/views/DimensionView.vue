<script setup lang="ts">
import LevelSelector from "@/components/LevelSelector.vue";
import { useRoute } from "vue-router";
import dimensions, { values, weights } from "@/dimensions";
import { onMounted, ref, toRef, watch, type Ref } from "vue";

const route = useRoute();
const dimension = ref<{} | undefined>(undefined);
let value = ref<number | undefined>(undefined);

const updateRefs = () => {
  const id = route.params.id;
  dimension.value = dimensions.find((d) => d.id === id);
  value = toRef(values.value, id);
};

watch(() => route.params.id, updateRefs, { immediate: true });
onMounted(() => updateRefs);
</script>

<template>
  <main>
    <LevelSelector v-if="dimension" :dimension="dimension" v-model="value" />
    <div v-else>Error!</div>
  </main>
</template>
