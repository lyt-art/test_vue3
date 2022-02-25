exports.install = function(Vue) {
  Vue.prototype.$jsp = function(url, params) {
    for (const item in params) {
      url += `&${item}=${params[item]}`;
    }
    return this.$jsonp(url);
  };
};

// exports.install = function (Vue, options) {
//         // 参数：method（API名），data（请求参数对象）
//         Vue.prototype.$jsp = function (url, method, data) {
//                 // baseUrl就是服务器地址
//                 const baseUrl = url;
//                 let url = `${baseUrl}${method}?`;
//                 // jsonp请求参数和get方法类似，都是params的方式拼接
//                 for (let item in data) {
//                         url += `&${item}=${data[item]}`;
//                 }
//                 return this.$jsonp(url);
//         };
// }
