<template>
  <div class="main">
    <h3>Summary</h3>
    <h2 class="highlight">Level of Mastery (LoM)</h2>
    <div class="valuecontainer">
      <span>Overall:</span>
      <span class="highlight lom">{{ overallLom }}</span>
    </div>
    <div
      v-for="d in props.service.dimensions.value?.dimensions"
      class="dimensioncontainer"
    >
      <h3>{{ d.title }}</h3>
      <div class="valuecontainer">
        <span>Level:</span>
        <span>
          {{ props.service.levelValues[d.id].value.value?.toFixed(1) }}
        </span>
        <span>Weight:</span>
        <span>
          {{ props.service.levelWeights[d.id].value.value?.toFixed(0) }} %
        </span>
      </div>
      <h4 class="space-before">Reasoning</h4>
      <div class="reasoning">
        {{ props.service.levelReasonings[d.id].value.text }}
      </div>
    </div>
    <h3>Reasoning for Weights</h3>
    <div class="reasoning">
      {{
        props.service.weightReasoning.value?.text || "No reasoning provided."
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { AssessmentSessionService } from "@/services/assessmentSession";
import { computed } from "vue";

const props = defineProps<{
  service: AssessmentSessionService;
}>();

const overallLom = computed(() => {
  if (!props.service.dimensions.value) {
    return NaN;
  }
  let sum = 0.0;
  let sum_weights = 0.0;
  Object.values(props.service.dimensions.value.dimensions).forEach((e) => {
    const v = props.service.levelValues[e.id].value.value;
    const w = props.service.levelWeights[e.id].value.value;
    if (!v || !w) {
      sum += NaN;
      sum_weights += NaN;
      return;
    }
    sum += v * w;
    sum_weights += w;
  });
  return (sum / sum_weights).toFixed(1);
});
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;
}
h2,
h3 {
  padding-top: 20px;
}
.space-before {
  padding-top: 40px;
}
.dimensioncontainer {
  position: relative;
}
.valuecontainer {
  padding-top: 20px;
  width: 200px;
  position: absolute;
  top: 0px;
  right: 0px;
  display: grid;
  grid-template-columns: 4fr 2fr;
  align-items: end;
}
.weightcontainer {
  width: 400px;
  display: grid;
  grid-template-columns: 5fr 1fr;
}
.lom {
  font-size: xx-large;
  font-weight: 700;
}
.reasoning {
  white-space: pre-wrap;
  border-left: solid 1px var(--color-border);
  padding-left: 10px;
}
</style>
