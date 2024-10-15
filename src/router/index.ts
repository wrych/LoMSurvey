import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/en",
      name: "Home EN",
      redirect: {
        name: "Dimension Overview",
        params: { language: "en", id: "ownership" },
      },
    },
    {
      path: "/de",
      name: "Home DE",
      redirect: {
        name: "Dimension Overview",
        params: { language: "de", id: "ownership" },
      },
    },
    {
      path: "/:language/dimension/:id",
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
