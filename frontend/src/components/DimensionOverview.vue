<template>
  <div>
    <h3>Description</h3>
    {{ props.dimension?.description }}
    <h3>Impact at DECTRIS</h3>
    {{ props.dimension?.impact }}
  </div>
</template>

<script setup lang="ts">
import type { Dimension } from '@/models/Dimension';
import type { Assessment } from '@/models/Assessment';
import type { AssessmentSession } from '@/models/AssessmentSession';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps<{
  assessment: Assessment | undefined,
  assessmentSession: AssessmentSession | undefined,
  dimension: Dimension | undefined
}>();
</script>
