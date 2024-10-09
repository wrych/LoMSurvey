<template>
  <div class="dimensioncontainer">
    <div>
      <h2>{{ dimension?.title }}</h2>
      <nav>
        <div class="nav">
          <router-link :to="`${basePath}/`">Overview</router-link>
          <router-link :to="`${basePath}/level`">Level</router-link>
          <router-link :to="`${basePath}/reasoning`">Reasoning</router-link>
        </div>
      </nav>
    </div>
    <router-view :dimension="dimension" :assessmentSession="assessmentSession" :assessment="assessment"
      :levels="levels" />
  </div>
</template>

<script setup lang="ts">
import type { Assessment } from '@/models/Assessment';
import type { AssessmentSession } from '@/models/AssessmentSession';
import type { Dimensions } from '@/models/Dimension';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useAssessmentService } from '@/services/assessment';
import type { Levels } from '@/models/Level';

const route = useRoute();
const basePath = `/assessment-session/${route.params.assessmentSessionId}/dimension/${route.params.dimensionId}`;

const assessmentService = useAssessmentService();

const props = defineProps<{
  assessment: Assessment | undefined,
  assessmentSession: AssessmentSession | undefined,
  dimensions: Dimensions | undefined
}>();
const dimension = computed(() => props.dimensions?.dimensions[parseInt(route.params.dimensionId as string)]);
const levels = ref<Levels | undefined>(undefined);

watch(() => dimension.value, () => {
  if (dimension.value) {
    const lvl = assessmentService.getLevelsByDimensionId(dimension.value.id);
    watch(lvl, () => {
      levels.value = lvl.value;
    });
  }
}, { immediate: true });
</script>

<style scoped>
.dimensioncontainer .nav {
  display: flex;
  justify-content: space-between;
}

.dimensioncontainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
