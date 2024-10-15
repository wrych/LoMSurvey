<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const updateLanguage = (event: Event) => {
  const newLanguage = (event.target as HTMLSelectElement).value;
  console.log(newLanguage);
  router.push({
    name: route.name,
    params: { ...route.params, language: newLanguage },
  });
};
</script>

<template>
  <div>
    <select :value="route.params.language" @change="updateLanguage">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
</template>
