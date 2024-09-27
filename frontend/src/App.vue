<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import dimensions from "./dimensions";
</script>

<template>
  <header>
    <div class="wrapper">
      <Navigation msg="Level of Mastery" />

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
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
