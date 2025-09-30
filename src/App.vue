<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { versionedDimensions, defaultDimensionVersion } from "./dimensions";
import { computed, type ComputedRef } from "vue";
import * as textblocks from "./textblocks";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import VersionSwitcher from "./components/VersionSwitcher.vue";

const route = useRoute();
const language = computed(
  () =>
    ((route.params.language as string) || "en") as textblocks.languageIndicies
);
const version: ComputedRef<keyof typeof versionedDimensions> = computed(
  () =>
    ((route.params.version as string) || defaultDimensionVersion) as keyof typeof versionedDimensions
);
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="switches">
        <div class="version-switcher">
          <VersionSwitcher />
        </div>
        <div class="language-switcher">
          <LanguageSwitcher />
        </div>
      </div>
      <header>
        <h1 class="highlight title">
          {{ textblocks.level_of_mastery[language] }}
        </h1>
        <div class="motd" v-html="textblocks.messageOfTheDay[language]"></div>
        <nav>
          <div v-for="d in versionedDimensions[version].value">
            <RouterLink :to="`/${version}/${language}/${d.id}`">
              {{ d.name[language] }}
            </RouterLink>
            <RouterLink :to="`/${version}/${language}/${d.id}/levels`" class="sub-item">
              {{ textblocks.level_selection[language] }}
            </RouterLink>
          </div>
        </nav>
      </header>
      <RouterView :language="language" :version="version" />
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
  padding: 5px
}

.motd {
  border: 1px solid var(--color-highlight);
}


.switches {
  position: absolute;
  top: 5px;
  right: 5px;
  display: grid;
  grid-template-columns: repeat(2, min-content);
}

nav {
  display: none;
}

nav>div {
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
    grid-auto-flow: column;
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
