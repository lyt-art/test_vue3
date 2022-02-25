import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //默认路由
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/test",
        name: "Test",
        component: () => import("../views/test/Test")
      }
    ]
  },
  {
    path: "/csjcys",
    name: "Csjcys",
    component: () => import("../views/augur/szg/Csjcys")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
