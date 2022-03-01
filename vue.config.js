module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 9019, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    hotOnly: false,
    proxy: {
      "/menu": {
        target: "http://localhost:3000", // 域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/menu": ""
        }
      },
      "/axs": {
        target: "http://localhost:3000/getMenuList", // 域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/axs": ""
        }
      }
    }
  }
};
