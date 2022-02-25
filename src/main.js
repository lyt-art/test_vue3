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

// 全局注册qs(解析url) 使用this.$qs.
import qs from "qs";
Vue.prototype.$qs = qs;

// 全局注册时间格式化 使用this.$moment().format
import moment from "moment";
Vue.prototype.$moment = moment;

// 自定义全局过滤器 使用{{变量 | 过滤器名称}}
import * as filters from "./filters/index";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
