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
    <router-view :service="service" :dimension="dimension" :levels="levels" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { AssessmentSessionService } from "@/services/assessmentSession";

const route = useRoute();
const basePath = computed(
  () =>
    `/assessment-session/${route.params.assessmentSessionId}/dimension/${route.params.dimensionId}`
);
const props = defineProps<{
  service: AssessmentSessionService;
}>();
const dimension = computed(
  () =>
    props.service.dimensions.value?.dimensions[
      parseInt(route.params.dimensionId as string)
    ]
);
const levels = props.service.getLevels(dimension);
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
