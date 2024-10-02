<template>
  <main>
    <div class="main">
      <h2 class="highlight">Level of Mastery Determination</h2>
      <div v-if="user">
        <div v-if="states">
          <p v-for="state in states.states">{{ state.title }}</p>
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
import { useAssessmentService } from "@/services/assessment";
import { useAuthService } from "@/services/auth";

const authService = useAuthService();
const user = authService.getUser();
const assessmentService = useAssessmentService();
const states = assessmentService.getAllStates();
</script>

<style scoped>
.main {
  width: 100%;
  max-width: 581px;
  max-height: 100vh;
  position: relative;
}
</style>
