import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 第三插件
// UI组件
import elementUI from "element-ui";
import "../node_modules/element-ui/lib/theme-chalk/index.css";
Vue.use(elementUI);

// 注册全局vue-jsonp 使用this.$jsonp()
import { VueJsonp } from "vue-jsonp";
Vue.use(VueJsonp);
// 全局注册自定义jsonp 使用this.$jsp()
import jsonp from "./jsonpConf/index";
Vue.use(jsonp);

// echarts图表 使用this.echarts.
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 自定义全局过滤器 使用{{变量 | 过滤器名称}}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
