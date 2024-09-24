<template>
  <div class="leveldescriptioncontainer">
    <div
      v-for="lvl in levels"
      :id="lvl.value.toString()"
      :style="computedStyling[lvl.value]"
      class="leveldescription"
    >
      <h3 @click="selectLevel(lvl.value)">Level {{ lvl.value }}</h3>
      <span>Employees in {{ dimension.name }} level {{ lvl.value }}...</span>
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
import { computed, watch } from "vue";

const props = defineProps({
  dimension: {},
});
const level = defineModel();
const selectLevel = (selectedLevel: Number) => {
  level.value = selectedLevel;
};

const dimension = props.dimension;
const levels = dimension.levels.sort((a, b) => b.value - a.value);

const computedStyling = computed(() => {
  const vs: Record<string, string> = {};
  const cLvl = parseFloat(level.value);
  const lvlOffset = 1;
  let nTop = 0;
  let nBottom = levels.filter((l) => l.value < cLvl - 1).length;
  levels.forEach((lvl) => {
    if (lvl.value > cLvl + 1) {
      vs[lvl.value] =
        `top: ${nTop * lvlOffset}%; left: ${(nTop * lvlOffset) / 4}%; z-index: ${10 + nTop};`;
      nTop++;
    } else if (lvl.value < cLvl - 1) {
      vs[lvl.value] =
        `bottom: ${nBottom * lvlOffset}%;left: ${(nBottom * lvlOffset) / 4}%; z-index: ${10 + nBottom};`;
      nBottom--;
    } else {
      const diff = cLvl - lvl.value;
      vs[lvl.value] =
        `top: ${30 * diff + 40}%;left: ${((Math.max(nTop, nBottom) + 2 - Math.round(diff)) * lvlOffset) / 4}%; z-index: ${Math.round(40 - Math.abs(diff) * 10)}`;
    }
  });
  return vs;
});

watch(level, () => {});
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
