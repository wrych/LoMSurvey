<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import dimensions from "lom-levels";
import { computed } from "vue";
import * as textblocks from "./textblocks";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

const route = useRoute();
const language = computed(
  () =>
    ((route.params.language as string) || "en") as textblocks.languageIndicies
);
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="language-switcher">
        <LanguageSwitcher />
      </div>
      <header>
        <h1 class="highlight title">
          {{ textblocks.level_of_mastery[language] }}
        </h1>
        <nav>
          <div v-for="d in dimensions">
            <RouterLink :to="`/latest/${language}/dimension/${d.id}`">
              {{ d.name[language] }}
            </RouterLink>
            <RouterLink
              :to="`/latest/${language}/dimension/${d.id}/levels`"
              class="sub-item"
            >
              {{ textblocks.level_selection[language] }}
            </RouterLink>
          </div>
        </nav>
      </header>
      <RouterView :language="language" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
}

.content {
  position: relative;
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100vh;
  width: 100vw;
  padding: 5px;
}

.language-switcher {
  position: absolute;
  top: 5px;
  right: 5px;
}

nav {
  display: none;
}

nav > div {
  display: grid;
}

.sub-item {
  font-size: small;
  padding-left: 1rem;
}

a.router-link-active {
  background-color: var(--color-background-soft);
}

a.router-link-exact-active {
  color: var(--color-text);
  background-color: var(--color-background-soft);
}

.title {
  display: none;
}

@media (min-width: 1024px) {
  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .content {
    width: 100vw;
    max-width: 1280px;
  }

  .title {
    display: block;
  }
}
</style>
