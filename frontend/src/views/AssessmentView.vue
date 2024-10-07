<template>
  <main>
    <h1>Hello World Top Level!</h1>
    <br />
    {{ assessmentSession }}
    <br />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import { useAssessmentService } from "@/services/assessment";
import { watch } from "vue";

const route = useRoute();
const assessmentService = useAssessmentService();
const assessmentSessionId = parseInt(
  Array.isArray(route.params.assessmentSessionId)
    ? route.params.assessmentSessionId[0]
    : route.params.assessmentSessionId
);

const assessmentSession =
  assessmentService.getAssessmentSessionById(assessmentSessionId);
watch(assessmentSession, () => {
  if (assessmentSession.value) {
    const assessment = assessmentService.getAssessmentById(
      assessmentSession.value.assessmentId
    );
  }
});
</script>
