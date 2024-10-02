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
