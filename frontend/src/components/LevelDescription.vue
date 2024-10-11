<template>
  <div class="leveldescriptioncontainer">
    <div
      v-if="orderedLevels"
      v-for="lvl in orderedLevels"
      :style="computedStyling[lvl.level]"
      class="leveldescription"
    >
      <h3 @click="selectLevel(lvl.level)">Level {{ lvl.level }}</h3>
      <span
        >Employees in {{ props.dimension?.title }} level
        {{ lvl.level }}...</span
      >
      <ul>
        <li v-for="c in lvl.capabilities">{{ c }}</li>
      </ul>
      <span>Examples</span>
      <ul>
        <li v-for="c in lvl.examples">{{ c }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dimension } from "@/models/Dimension";
import { Levels } from "@/models/Level";
import type { AssessmentSessionService } from "@/services/assessmentSession";
import { computed, type ComputedRef } from "vue";

const props = defineProps<{
  service: AssessmentSessionService;
  dimension: Dimension | undefined;
  levels: Levels | undefined;
}>();

const orderedLevels = computed(() =>
  props.levels
    ? Object.values(props.levels.levels).sort((a, b) => a.level - b.level)
    : undefined
);

const selectLevel = (level: number) => {
  props.service.levelValues[props.dimension!.id].value.value = level;
};

const computedStyling: ComputedRef<Record<string, string>> = computed(() => {
  const vs: Record<string, string> = {};
  const levels = props.levels ? Object.values(props.levels.levels) : undefined;
  if (!levels || !props.dimension) {
    return vs;
  }
  const cLvl = props.service.levelValues[props.dimension.id].value.value || 8.0;
  const lvlOffset = 0.5;
  let nTop = 0;
  let nBottom = levels.filter((l) => l.level < cLvl - 1).length;
  levels.forEach((lvl) => {
    if (lvl.level > cLvl + 1) {
      vs[lvl.level] =
        `top: ${nTop * lvlOffset}%; left: ${(nTop * lvlOffset) / 4}%; z-index: ${10 + nTop};`;
      nTop++;
    } else if (lvl.level < cLvl - 1) {
      vs[lvl.level] =
        `bottom: ${nBottom * lvlOffset}%;left: ${(nBottom * lvlOffset) / 4}%; z-index: ${10 + nBottom};`;
      nBottom--;
    } else {
      const diff = cLvl - lvl.level;
      vs[lvl.level] =
        `top: ${30 * diff + 40}%;left: ${((Math.max(nTop, nBottom) + 2 - Math.round(diff)) * lvlOffset) / 4}%; z-index: ${Math.round(40 - Math.abs(diff) * 10)}`;
    }
  });
  return vs;
});
</script>

<style scoped>
h3 {
  color: var(--color-heading);
  cursor: pointer;
}

.leveldescriptioncontainer {
  position: relative;
  width: 100%;
  height: 100%;
}

.leveldescription {
  width: 100%;
  border: solid 1px var(--color-border);
  border-radius: 5px;
  background-color: var(--color-background-soft);
  position: absolute;
  padding: 5px;
  padding-left: 15px;
}
</style>
