module.exports = {
  publicPath: "./",
  outputDir: process.env.outputDir,
  lintOnSave: false, //是否在保存的时候检查  检查出的错误会触发编译失败。
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件 default:true 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
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
      },
      "/api": {
        target: "http://39.98.123.211",
      }
    }
  }
};
