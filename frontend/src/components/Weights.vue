<template>
  <div v-if="props.service.dimensions.value">
    <h3>Weights</h3>
    <span>
      Please assess how much each dimension matters for your specific role and
      position in the company.
    </span>
    <br />
    <br />
    <div>
      <SliderWithValue
        v-for="dimension in props.service.dimensions.value?.dimensions"
        :label="`Dimension ${dimension.title}`"
        v-model.number="props.service.levelWeights[dimension.id].value.value"
      />
    </div>
    Please provide the reasoning for your weights.
    <textarea
      :value="props.service.weightReasoning.value!.text"
      @change="setText"
      class="reasoning"
      placeholder="Please provide reasoning for your weights..."
    />
  </div>
</template>

<script setup lang="ts">
import type { AssessmentSessionService } from "@/services/assessmentSession";
import SliderWithValue from "./SliderWithValue.vue";

const props = defineProps<{
  service: AssessmentSessionService;
}>();

const setText = (event: Event) => {
  props.service.weightReasoning.value!.text = (
    event.target as HTMLTextAreaElement
  ).value;
};
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
