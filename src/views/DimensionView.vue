<script setup lang="ts">
import { useRoute } from "vue-router";
import dimensions from "lom-levels";
import { values } from "@/dimensions";
import { computed, ref, toRef, watch, type PropType } from "vue";
import { RouterView } from "vue-router";
import * as textblocks from "@/textblocks";

const props = defineProps({
  language: {
    type: String as PropType<textblocks.languageIndicies>,
    required: true,
  },
});
const route = useRoute();
let value = ref<number | undefined>(undefined);
const dimension = computed(() =>
  dimensions.find((d) => d.id === route.params.id)
);

const updateRefs = () => {
  const id = route.params.id;
  if (typeof id === "string") {
    value = toRef(
      values.value,
      id as
        | "subject_matter_expertise"
        | "ownership"
        | "collaboration_and_communication"
    );
  }
};

watch(() => route.params.id, updateRefs, { immediate: true });
</script>

<template>
  <main>
    <div v-if="dimension && props.language" class="main">
      <h2>{{ dimension.name[props.language] }}</h2>
      <RouterView
        :dimension="dimension"
        :language="props.language"
        v-model="value"
      />
    </div>
    <div v-else>Error!</div>
  </main>
</template>

<style scoped>
.main {
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
}
</style>
