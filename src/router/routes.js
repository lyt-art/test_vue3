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
        component: () => import("../views/test/PluginTest")
      },
      {
        path: "/vuex-test",
        name: "VuexTest",
        component: () => import("../views/test/VuexTest")
      },
      {
        path: "/other-test",
        name: "OtherTest",
        component: () => import("../views/test/OtherTest")
      },
      {
        path: "/tree-table",
        name: "TreeTable",
        component: () => import("../views/test/TreeTable")
      },
      {
        path: "/web-table",
        name: "WebTable",
        component: () => import("../views/test/WebTable")
      }
    ]
  },

  {
    path: "/csjcys",
    name: "Csjcys",
    component: () => import("../views/augur/szg/Csjcys")
  }
];

export default routes;
