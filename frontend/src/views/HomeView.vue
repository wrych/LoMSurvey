<template>
  <main>
    <div class="main">
      <h2 class="highlight">Level of Mastery Determination</h2>
      <div v-if="user">
        <div
          v-if="assessmentSessions && states && assessments"
          v-for="s in assessmentSessions.assessmentSessions"
        >
          <RouterLink :to="`/assessment-session/${s.id}/`" :key="s.id">
            {{ assessments.assessments[s.assessmentId].title }} ({{
              states.states[s.stateId].title
            }})
          </RouterLink>
        </div>
        <div v-else>
          <p>Loading Assessments...</p>
        </div>
      </div>
      <div v-else>
        <p>Please <a href="/_auth/">log in</a> to access the assessment.</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAssessmentService } from "@/services/assessment";
import { useAuthService } from "@/services/auth";

const authService = useAuthService();
const user = authService.getUser();
// const isAdmin = authService.isAdmin();
const assessmentService = useAssessmentService();
const assessments = assessmentService.getAllAssessments();
const states = assessmentService.getAllStates();
const assessmentSessions = assessmentService.getAllAssessmentSessions();
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 581px;
  max-height: 100vh;
  position: relative;
}
</style>
