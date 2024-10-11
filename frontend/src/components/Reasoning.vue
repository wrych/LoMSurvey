<template>
  <div v-if="dimension">
    <h3>Reasoning</h3>
    Please provide examples for your track record in dimension
    {{ dimension.title }}.
    <textarea
      :value="props.service.levelReasonings[dimension.id].value.text"
      class="reasoning"
      :placeholder="`Please provide examples of your track record in ${dimension.title}...`"
      @change="setText"
    />
  </div>
</template>

<script setup lang="ts">
import type { Dimension } from "@/models/Dimension";
import type { AssessmentSessionService } from "@/services/assessmentSession";

const props = defineProps<{
  dimension: Dimension | undefined;
  service: AssessmentSessionService;
}>();

const setText = (event: Event) => {
  props.service.levelReasonings[props.dimension!.id].value.text = (
    event.target as HTMLTextAreaElement
  ).value;
};
</script>

<style scoped>
.main {
  width: 100%;
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
