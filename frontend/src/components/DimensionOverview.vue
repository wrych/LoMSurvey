<template>
  <div>
    <h3>Description</h3>
    {{ props.dimension?.description }}
    <h3>Impact at DECTRIS</h3>
    {{ props.dimension?.impact }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { AssessmentSessionService } from '@/services/assessmentSession';
import type { Dimension } from '@/models/Dimension';

const route = useRoute();

const props = defineProps<{
  service: AssessmentSessionService;
  dimension: Dimension | undefined;
}>();
</script>
