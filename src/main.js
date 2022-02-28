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

//使用Vue.directive()定义一个全局指令
//1.参数一：指令的名称，定义时指令前面不需要写v-
//2.参数二：是一个对象，该对象中有相关的操作函数
//3.在调用的时候必须写v-
const drag = Vue.directive("drag", {
  //1.指令绑定到元素上回立刻执行bind函数，只执行一次
  //2.每个函数中第一个参数永远是el，表示绑定指令的元素，el参数是原生js对象
  //3.通过el.focus()是无法获取焦点的，因为只有插入DOM后才生效
  //  bind: function(el) {},
  //inserted表示一个元素，插入到DOM中会执行inserted函数，只触发一次
  inserted: function(el) {
    el.onmousedown = function(e) {
      const disx = e.pageX - el.offsetLeft;
      const disy = e.pageY - el.offsetTop;
      document.onmousemove = function(e) {
        el.style.left = `${e.pageX - disx}px`;
        el.style.top = `${e.pageY - disy}px`;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
  //当VNode更新的时候会执行updated，可以触发多次
  //  updated: function(el) {}
});
export default drag;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
