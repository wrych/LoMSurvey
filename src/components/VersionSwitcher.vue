<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { versions, versionedDimensions } from "../dimensions"

const route = useRoute();
const router = useRouter();

const updateVersion = (event: Event) => {
  const newVersion = (event.target as HTMLSelectElement).value;
  router.push({
    name: route.name,
    params: { ...route.params, version: newVersion },
  });
};
</script>

<template>
  <div>
    <select :value="route.params.version" @change="updateVersion">
      <option v-for="version in versions" :value="version">{{ version }}
        <span v-if="version === 'latest'"> ({{ versionedDimensions[version].version }})</span>
      </option>
    </select>
  </div>
</template>
