import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// 路由跳转到当前页面报错/解决点击当前页面的路由路径报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 获取登录用户id
const getId = function() {
  let obj = {};
  let str =
    window.location.search.substr(1) || window.location.hash.split("?")[1];
  if (str) {
    str.split(/&/g).foreach(item => {
      if (item) {
        obj[(item = item.split("="))[0]] = item[1];
      }
    });
  }
  return obj;
};

// 路由拦截守卫
router.beforeEach((to, from, next) => {
  if (
    process.env.NODE_ENV == "build_dev" ||
    process.env.NODE_ENV == "build_pro"
  ) {
    if (getId().id) {
      sessionStorage.setItem("visitId", getId().id);
      // this.$store.commit("idMutationsWithParams", getId().id);
    }
    let id = sessionStorage.getItem("visitId");
    // let id = this.$store.state.visitId;
    let pageId = {
      id: id
    };
    if (!id) {
      window.parent.location.href = process.env.VUE_APP_URL;
    }
    let menuList = this.$store.state.menuList;
    // let menuList = sessionStorage.getItem("menuList");
    if (!menuList.length) {
      getMenuList(pageId).then(res => {
        if (res.data.dataCode == 200) {
          menuList = res.data.data;
        }
        this.$store.commit("menuListMutationsWithParams", menuList);
        // sessionStorage.setItem("menuList", menuList);
        // 可以做一些权限判断
        // 1、已知原菜单结构的情况：
        //    通过indexOf检索是否存在此菜单名
        //    通过原菜单结构进行.sort排序
        //    然后设置一个flag（0，1）值表示是否有权限
        // 2、未知原菜单结构情况：
      });
    } else {
      next();
    }
  } else {
    if (to.name === "Home") {
      next({ path: "/plugin-test" });
    } else {
      next();
    }
  }
});

//路由拦截-后守卫
router.afterEach(() => {});

export default router;
