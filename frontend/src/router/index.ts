import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/assessment-session/:assessmentSessionId",
      component: () => import("../views/AssessmentSessionView.vue"),
      children: [
        {
          path: "",
          name: "Assessment Overview",
          component: () =>
            import("../components/AssessmentSessionOverview.vue"),
        },
        {
          path: "dimension/:dimensionId",
          component: () => import("../components/Dimension.vue"),
          children: [
            {
              path: "",
              name: "Dimension Overview",
              component: () => import("../components/DimensionOverview.vue"),
            },
            {
              path: "level",
              name: "Level",
              component: () => import("../components/LevelSelector.vue"),
            },
            {
              path: "reasoning",
              name: "Reasoning",
              component: () => import("../components/Reasoning.vue"),
            },
          ],
        },
      ],
    },
    //   {
    //     path: "/weight",
    //     name: "Weight",
    //     component: () => import("../views/WeightView.vue"),
    //   },
    //   {
    //     path: "/summary",
    //     name: "summary",
    //     component: () => import("../views/SummaryView.vue"),
    //   },
    //   {
    //     path: "/dimension/:id",
    //     name: "Dimension",
    //     component: () => import("../views/DimensionView.vue"),
    //   },
    //   {
    //     path: "/reasoning/:id",
    //     name: "Reasoning",
    //     component: () => import("../views/ReasoningView.vue"),
    //   },
  ],
});

export default router;
