import Vue from "vue";
import VueRouter from "vue-router";
import Lista from "../views/Lista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lista",
    component: Lista
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "registro" */ "../views/Registro.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
