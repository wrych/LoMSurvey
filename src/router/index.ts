import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/latest/en",
      name: "Home EN",
      redirect: {
        name: "Dimension Overview",
        params: { language: "en", id: "ownership" },
      },
    },
    {
      path: "/latest/de",
      name: "Home DE",
      redirect: {
        name: "Dimension Overview",
        params: { language: "de", id: "ownership" },
      },
    },
    {
      path: "/latest/:language/dimension/:id",
      name: "Dimension",
      component: () => import("../views/DimensionView.vue"),
      children: [
        {
          path: "",
          name: "Dimension Overview",
          component: () => import("../components/OverView.vue"),
        },
        {
          path: "levels",
          name: "Dimension Levels",
          component: () => import("../components/LevelSelector.vue"),
        },
      ],
    },
  ],
});

export default router;
