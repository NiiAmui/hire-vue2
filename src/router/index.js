import { createRouter, createWebHistory } from "vue-router";
import Inbox from "../views/InboxComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Inbox,
    },
    {
      path: "/archive",
      name: "archive",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ArchiveComponent.vue"),
    },
  ],
});

export default router;
