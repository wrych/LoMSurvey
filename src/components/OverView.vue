<script setup lang="ts">
import { type PropType } from "vue";
import { type Dimension } from "lom-levels";
import * as textblocks from "../textblocks";
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
</script>

<template>
  <div v-if="props.dimension">
    <h3>{{ textblocks.description[props.language] }}</h3>
    <p v-html="props.dimension.description[props.language]" />
    <h3>{{ textblocks.impact[props.language] }}</h3>
    <p v-html="props.dimension.impact[props.language]" />
  </div>
</template>
