<template>
  <div class="leveldescriptioncontainer">
    <div
      v-for="lvl in levels"
      :id="lvl.value.toString()"
      :style="computedStyling[lvl.value]"
      class="leveldescription"
    >
      <h3 @click="selectLevel(lvl.value)">Level {{ lvl.value }}</h3>
      <span
        >{{
          textblocks.capitalitzeFirstLetter(
            textblocks.employees[props.language]
          )
        }}
        in
        {{ dimension.name[props.language] }}
        level {{ lvl.value }}...</span
      >
      <ul>
        <li v-for="c in lvl.capabilities[props.language]">{{ c }}</li>
      </ul>
      <span>{{
        textblocks.capitalitzeFirstLetter(textblocks.examples[props.language])
      }}</span>
      <ul>
        <li v-for="c in lvl.examples[props.language]">{{ c }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Dimension } from "@/dimensions";
import { computed, watch, type ModelRef, type PropType } from "vue";
import * as textblocks from "@/textblocks";

const props = defineProps({
  dimension: {
    type: Object as PropType<Dimension>,
    required: true,
  },
  language: {
    type: String as PropType<textblocks.languageIndicies>,
    required: true,
  },
});
const level: ModelRef<number | undefined> = defineModel();
const selectLevel = (selectedLevel: number) => {
  level.value = selectedLevel;
};

const levels = computed(() =>
  props.dimension.levels.sort((a, b) => b.value - a.value)
);

const computedStyling = computed(() => {
  const vs: Record<string, string> = {};
  const cLvl = level.value;
  if (!cLvl) {
    throw Error("level must not be undefined");
  }
  const lvlOffset = 0.5;
  let nTop = 0;
  let nBottom = levels.value.filter((l) => l.value < cLvl - 1).length;
  levels.value.forEach((lvl) => {
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
        `top: ${30 * diff + 40}%;left: ${((Math.max(nTop, nBottom) + lvlOffset - Math.round(diff)) * lvlOffset) / 4}%; z-index: ${Math.round(40 - Math.abs(diff) * 10)}; background-color: var(--color-background-mute); border-color: var(--color-highlight);`;
    }
  });
  return vs;
});

watch(level, () => {});
</script>

<style scoped>
h3 {
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
