<template>
  <main>
    <div class="assessment-session" v-if="service.permissions.value?.canView">
      <div>
        <h1 v-if="service.assessment.value">
          {{ service.assessment.value.title }}
        </h1>
        <nav>
          <div class="nav-top">
            <router-link
              v-for="entry of service.navEntries.value.filter(
                (entry) => entry.isTopLevel
              )"
              :key="entry.path"
              :to="entry.path"
            >
              <div class="link" v-if="entry.isTopLevel">{{ entry.title }}</div>
            </router-link>
          </div>
        </nav>
      </div>
      <router-view :service="service" />
      <div>
        <nav>
          <div
            v-if="service.navEntries.value && pageIndex >= 0"
            class="nav-bottom"
          >
            <div class="left">
              <router-link
                v-if="pageIndex > 0"
                :to="service.navEntries.value[pageIndex - 1].path"
              >
                <div class="link">< prev</div>
              </router-link>
            </div>
            <div class="progress-info center">
              {{ pageIndex + 1 }}/{{ service.navEntries.value.length }}
            </div>
            <div class="right">
              <router-link
                v-if="pageIndex + 1 < service.navEntries.value.length"
                :to="service.navEntries.value[pageIndex + 1]?.path"
              >
                <div class="link next">next ></div>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div v-else>
      <p v-if="user">You are not authorized to edit this assessment.</p>
      <p v-else>
        Please <a href="/_auth/">log in</a> to access the assessment.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import { AssessmentSessionService } from "@/services/assessmentSession";

const route = useRoute();
const basePath = computed(
  () => `/assessment-session/${route.params.assessmentSessionId}`
);
const assessmentSessionId = computed(() =>
  parseInt(
    Array.isArray(route.params.assessmentSessionId)
      ? route.params.assessmentSessionId[0]
      : route.params.assessmentSessionId
  )
);

const service = new AssessmentSessionService(assessmentSessionId, basePath);
const user = service.auth.getUser();

const pageIndex = computed(() =>
  service.navEntries.value.findIndex((entry) => entry.path === route.fullPath)
);
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
