import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("./Inicio/index.vue"),
  },
  {
    path: "/hello",
    name: "Hello",
    component: () => import("./components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
