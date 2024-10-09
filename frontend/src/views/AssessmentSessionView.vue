<template>
  <main>
    <div class="assessment-session">
      <div>
        <h1 v-if="assessment">{{ assessment.title }}</h1>
        <nav>
          <div class="nav-top">
            <router-link :to="`${basePath}/`">
              <div class="link">Overview</div>
            </router-link>
            <router-link
              v-if="dimensions"
              v-for="dimension in dimensions.dimensions"
              :to="`${basePath}/dimension/${dimension.id}`"
            >
              <div class="link">
                {{ dimension.title }}
              </div>
            </router-link>
            <router-link :to="`${basePath}/weights`">
              <div class="link">Weights</div>
            </router-link>
            <router-link :to="`${basePath}/summary`">
              <div class="link">Summary</div>
            </router-link>
          </div>
        </nav>
      </div>
      <router-view
        :assessmentSession="assessmentSession"
        :assessment="assessment"
        :dimensions="dimensions"
      />
      <div>
        <nav>
          <div v-if="navEntries && pageIndex >= 0" class="nav-bottom">
            <div class="left">
              <router-link
                v-if="pageIndex > 0"
                :to="navEntries[pageIndex - 1].path"
              >
                <div class="link">< prev</div>
              </router-link>
            </div>
            <div class="progress-info center">
              {{ pageIndex + 1 }}/{{ navEntries.length }}
            </div>
            <div class="right">
              <router-link
                v-if="pageIndex + 1 < navEntries.length"
                :to="navEntries[pageIndex + 1]?.path"
              >
                <div class="link next">next ></div>
              </router-link>
            </div>
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

const pageIndex = computed(() =>
  navEntries.value.findIndex((entry) => entry.path === route.fullPath)
);

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
      path: `${basePath}/`,
    });
    Object.values(dimensions.value.dimensions).forEach((d) => {
      navEntries.value.push({
        title: `${d.title} Overview`,
        path: `${basePath}/dimension/${d.id}`,
      });
      navEntries.value.push({
        title: `${d.title} Level`,
        path: `${basePath}/dimension/${d.id}/level`,
      });
      navEntries.value.push({
        title: `${d.title} Reasoning`,
        path: `${basePath}/dimension/${d.id}/reasoning`,
      });
    });
    navEntries.value.push({
      title: "Summary",
      path: `${basePath}/summary`,
    });
  }
});
</script>

<style scoped>
.assessment-session .nav-top {
  display: none;
  justify-content: space-between;
  width: 100%;
}

.assessment-session .nav-bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
}

.link {
  width: 100%;
  height: 100%;
  background-color: var(--color-background-mute);
  text-align: center;
}

.next {
  background-color: var(--color-highlight);
  color: var(--color-background);
}

.router-link-active .link {
  background-color: var(--color-background-soft);
  color: var(--color-text);
}

.assessment-session {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.progress-info {
  text-align: center;
}

@media (min-width: 1024px) {
  .assessment-session .nav-top {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
