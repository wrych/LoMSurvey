<template>
  <main>
    <div class="assessment-session">
      <div>
        <h1 v-if="assessment">{{ assessment.title }}</h1>
        <nav>
          <div class="nav">
            <router-link :to="`${basePath}/`">Overview</router-link>
            <router-link v-if="dimensions" v-for="dimension in dimensions.dimensions"
              :to="`${basePath}/dimension/${dimension.id}`">{{ dimension.title }}</router-link>
            <router-link :to="`${basePath}/summary`">Summary</router-link>
          </div>
        </nav>
      </div>
      <router-view :assessmentSession="assessmentSession" :assessment="assessment" :dimensions="dimensions" />
      <div>
        <nav>
          <div class="nav">
            <span>
              <router-link v-if="pageIndex > 0 && navEntries" :to="navEntries[pageIndex - 1].path">{{
                navEntries[pageIndex - 1].title }}</router-link>
            </span>
            <span>{{ pageIndex }}/{{ navEntries.length }}</span>
            <span>
              <router-link v-if="pageIndex > 0 && navEntries" :to="navEntries[pageIndex + 1].path">{{
                navEntries[pageIndex + 1].title }}</router-link>
            </span>
          </div>
        </nav>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import { useAssessmentService } from "@/services/assessment";
import { watch, ref } from "vue";
import { Assessment } from "@/models/Assessment";
import type { Dimensions } from "@/models/Dimension";
import { computed } from "@vue/reactivity";

const route = useRoute();
const basePath = `/assessment-session/${route.params.assessmentSessionId}`;

const assessmentService = useAssessmentService();
const assessmentSessionId = parseInt(
  Array.isArray(route.params.assessmentSessionId)
    ? route.params.assessmentSessionId[0]
    : route.params.assessmentSessionId
);

const assessmentSession =
  assessmentService.getAssessmentSessionById(assessmentSessionId);
const assessment = ref<Assessment | undefined>(undefined);
const dimensions = ref<Dimensions | undefined>(undefined);
const navEntries = ref<{ title: string; path: string }[]>([]);

const pageIndex = computed(() => navEntries.value.findIndex(
  (entry) => entry.path === route.fullPath
));


watch(assessmentSession, () => {
  if (assessmentSession.value) {
    const a = assessmentService.getAssessmentById(
      assessmentSession.value.assessmentId
    );
    watch(a, () => {
      assessment.value = a.value;
    });
  }
});

watch(assessment, () => {
  if (assessment.value) {
    const ds = assessmentService.getDimensionsByAssessmentId(
      assessment.value.id
    );
    watch(ds, () => {
      dimensions.value = ds.value;
    });
  }
});

watch(dimensions, () => {
  if (dimensions.value) {
    navEntries.value.push({
      title: "Overview",
      path: `${basePath}/`
    });
    Object.values(dimensions.value.dimensions).forEach((d) => {
      navEntries.value.push({
        title: `${d.title} Overview`,
        path: `${basePath}/dimension/${d.id}`
      })
      navEntries.value.push({
        title: `${d.title} Level`,
        path: `${basePath}/dimension/${d.id}/level`
      })
      navEntries.value.push({
        title: `${d.title} Reasoning`,
        path: `${basePath}/dimension/${d.id}/reasoning`
      })
    });
    navEntries.value.push({
      title: "Summary",
      path: `${basePath}/summary`
    });
  }
})
</script>

<style scoped>
.assessment-session .nav {
  display: flex;
  justify-content: space-between;
}

.assessment-session {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
