<template>
  <nav>
    <span>Introduction</span>
    <RouterLink to="/">Home</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useAuthService } from "@/services/auth";

const authService = useAuthService();
const user = authService.getUser();
const role = authService.getRoles();

setInterval(() => {
  console.log("User: ", user.value);
  console.log("Role: ", role.value);
}, 1000);
</script>
