<template>
  <div class="dimensioncontainer">
    <div>
      <h2>{{ dimension?.title }}</h2>
      <nav>
        <div class="nav">
          <router-link :to="`${basePath}/`">
            <div class="link">Overview</div>
          </router-link>
          <router-link :to="`${basePath}/level`">
            <div class="link">Level</div>
          </router-link>
          <router-link :to="`${basePath}/reasoning`">
            <div class="link">Reasoning</div>
          </router-link>
        </div>
      </nav>
    </div>
    <router-view
      :dimension="dimension"
      :assessmentSession="assessmentSession"
      :assessment="assessment"
      :levels="levels"
    />
  </div>
</template>

<script setup lang="ts">
import type { Assessment } from "@/models/Assessment";
import type { AssessmentSession } from "@/models/AssessmentSession";
import type { Dimensions } from "@/models/Dimension";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { useAssessmentService } from "@/services/assessment";
import type { Levels } from "@/models/Level";

const route = useRoute();
const basePath = computed(
  () =>
    `/assessment-session/${route.params.assessmentSessionId}/dimension/${route.params.dimensionId}`
);

const assessmentService = useAssessmentService();

const props = defineProps<{
  assessment: Assessment | undefined;
  assessmentSession: AssessmentSession | undefined;
  dimensions: Dimensions | undefined;
}>();
const dimension = computed(
  () =>
    props.dimensions?.dimensions[parseInt(route.params.dimensionId as string)]
);
const levels = ref<Levels | undefined>(undefined);

watch(
  () => dimension.value,
  () => {
    if (dimension.value) {
      const lvl = assessmentService.getLevelsByDimensionId(dimension.value.id);
      watch(lvl, () => {
        levels.value = lvl.value;
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.dimensioncontainer .nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.dimensioncontainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
.link {
  width: 100%;
  height: 100%;
  background-color: var(--color-background-mute);
  text-align: center;
}

.router-link-active .link {
  background-color: var(--color-background-soft);
  color: var(--color-text);
}
</style>
