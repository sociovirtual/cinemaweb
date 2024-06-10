import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./pagina/404.vue"),
  },
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
  {
    path: "/pelicula/:slug",
    name: "Pelicula",
    component: () => import("./pelicula/index.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("./contacto/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
