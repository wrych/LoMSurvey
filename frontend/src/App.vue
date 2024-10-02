<template>
  <div class="wrapper">
    <header>
      <InfoBar />
    </header>
    <div class="content">
      <div class="navigation">
        <nav>
          <span>Introduction</span>
          <RouterLink to="/">Introduction</RouterLink>
          <span v-for="d in dimensions">
            {{ d.name }}
            <RouterLink :to="`/dimension/${d.id}`">Level</RouterLink>
            <RouterLink :to="`/reasoning/${d.id}`">Track Record</RouterLink>
          </span>
          <span>Overall</span>
          <RouterLink to="/weight">Weight</RouterLink>
          <RouterLink to="/summary">Summary</RouterLink>
        </nav>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import dimensions from "./dimensions";
import InfoBar from "./components/InfoBar.vue";
</script>

<style scoped>
.wrapper {
  height: 100vh;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr;
}

.content {
  display: grid;
}

.navigation {
  display: none;
}

nav {
  width: 100%;
  font-size: small;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-heading);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .content {
    grid-template-columns: 200px 1fr;
  }
  .navigation {
    display: block;
  }
  nav {
    text-align: left;
  }
}
</style>
