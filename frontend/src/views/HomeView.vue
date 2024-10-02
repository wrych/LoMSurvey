<template>
  <main>
    <div class="main">
      <h2 class="highlight">Level of Mastery Determination</h2>
      <div v-if="user">
        <div v-if="states">
          <div v-for="state in states.states">
            <p>{{ state.title }}</p>
            <ul v-if="assessments">
              <li v-for="assessment in getAssessments(state.id).assessments">
                {{ assessment.title }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p>Loading states...</p>
        </div>
      </div>
      <div v-else>
        <p>Please <a href="/_auth/">log in</a> to access the assessment.</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Assessments } from "@/models/Assessment";
import { useAssessmentService } from "@/services/assessment";
import { useAuthService } from "@/services/auth";

const authService = useAuthService();
const user = authService.getUser();
const assessmentService = useAssessmentService();
const states = assessmentService.getAllStates();
const assessments = assessmentService.getAssessmentsByStates();

const getAssessments = (stateId: number): Assessments => {
  if (assessments.value && assessments.value[stateId]) {
    return assessments.value[stateId];
  }
  return new Assessments([]);
};
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 581px;
  max-height: 100vh;
  position: relative;
}
</style>
