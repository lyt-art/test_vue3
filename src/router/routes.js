const routes = [
  {
    path: "/", //默认路由
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home"),
    children: [
      {
        path: "/plugin-test",
        name: "PluginTest",
        component: () => import("../views/cap/test/PluginTest")
      },
      {
        path: "/vuex-test",
        name: "VuexTest",
        component: () => import("../views/cap/test/VuexTest")
      },
      {
        path: "/other-test",
        name: "OtherTest",
        component: () => import("../views/cap/test/OtherTest")
      },
      {
        path: "/tree-table",
        name: "TreeTable",
        component: () => import("../views/cap/modules/TreeTable")
      },
      {
        path: "/web-table",
        name: "WebTable",
        component: () => import("../views/cap/modules/WebTable")
      },
      {
        path: "/land-sect-1",
        name: "LandSect1",
        component: () => import("../views/augur/szg/LandSect1")
      },
      {
        path: "/gzmap-chart",
        name: "GZMapChart",
        component: () => import("../views/cap/modules/GZMapChart")
      },
      {
        path: "/custom-swiper",
        name: "CustomSwiper",
        component: () => import("../views/cap/modules/CustomSwiper")
      },
      {
        path: "/land-sect-2",
        name: "LandSect2",
        component: () => import("../views/augur/szg/LandSect2")
      },
      {
        path: "/zoom",
        name: "Zoom",
        component: () => import("../views/cap/modules/Zoom")
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/cap/modules/Register")
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/cap/modules/Login")
      }
    ]
  },

  {
    path: "/csjcys",
    name: "Csjcys",
    component: () => import("../views/augur/szg/Csjcys")
  },
  {
    path: "/cityweb",
    name: "cityweb",
    component: () => import("../views/augur/city/cityweb")
  }
];

export default routes;
