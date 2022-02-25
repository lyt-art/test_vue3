import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 第三插件
// UI组件
import elementUI from "element-ui";
import "../node_modules/element-ui/lib/theme-chalk/index.css";
Vue.use(elementUI);

// echarts图表
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
