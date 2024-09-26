<template>
  <main>
    <div class="main">
      <h2 class="highlight">Dimension {{ dimension.name }}</h2>
      Please provide examples for your track record in dimension
      {{ dimension.name }}.
      <textarea
        class="reasoning"
        v-model="reasoning"
        placeholder="Please provide examples of your track record in ${dimension.name}..."
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import dimensions, {
  reasonings,
  type Dimension,
  type dimensionWeightId,
} from "@/dimensions";
import { ref, toRef, watch, type Ref } from "vue";

const route = useRoute();

const getDimensionById = (id: string | string[] | undefined): Dimension => {
  const d = dimensions.find((d) => d.id === id);
  if (!d) {
    throw Error("unknown dimension");
  }
  return d;
};

const updateRefs = () => {
  const id = route.params.id;
  dimension.value = getDimensionById(id);
  reasoning = toRef(reasonings.value, id as dimensionWeightId);
};

const dimension = ref<Dimension>(getDimensionById(route.params.id));
let reasoning: Ref<string | undefined> | undefined = undefined;
watch(() => route.params.id, updateRefs, { immediate: true });
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 581px;
  max-height: 100vh;
  position: relative;
}
.reasoning {
  width: 100%;
  min-height: 150px;
  border-color: var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
}
</style>
