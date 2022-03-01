import axios from "axios";
import { Message } from "element-ui";
// import { v4 as uuidv4 } from 'uuid';
// import { sha256 } from 'js-sha256';

// let signature = "";
// let timestamp = "";
// let nonce = "";

// 获取个签（后端提供接口发送ajax请求）
// let getSignature = function() {
//   if (
//     process.env.NODE_ENV == "build_dev" ||
//     process.env.NODE_ENV == "serve_dev" ||
//     process.env.NODE_ENV == "build_pro"
//   ) {
//     const time = (Date.now() / 1000).toFixed(0);
//     const timestamp = localStorage.getItem("timestamp");
//     const min = time - timestamp;
//     if (timestamp == null || min > 150) {
//       return new Promise((resolve, reject) => {
//         $.ajax({
//           url: "signature_api/signature/",
//           type: "post",
//           data: {
//             passid: process.env.VUE_APP_PASSID
//           },
//           success: function(res) {
//             resolve(res);
//           },
//           error: function(err) {
//             reject(err);
//           }
//         });
//       })
//         .then(res => {
//           return res;
//         })
//         .catch(err => {
//           return err;
//         });
//     } else {
//       const res = {
//         data: {
//           signature: localStorage.getItem("signature"),
//           timestamp: localStorage.getItem("timestamp"),
//           nonce: localStorage.getItem("nonce")
//         }
//       };
//       return res;
//     }
//   }
// };
// let setSignature = function(signature, timestamp, nonce) {
//   localStorage.removeItem("signature");
//   localStorage.removeItem("timestamp");
//   localStorage.removeItem("nonce");
//   localStorage.setItem("signature", signature);
//   localStorage.setItem("timestamp", timestamp);
//   localStorage.setItem("nonce", nonce);
// };

// http request 拦截器
class httpRequest {
  constructor() {
    this.options = {
      url: "",
      method: ""
    };
    // 存储请求队列
    this.queue = {};
  }

  // 销毁请求实例
  destroy(url) {
    delete this.queue[url];
    const queue = Object.keys(this.queue);
    return queue.length;
  }
  // 请求拦截
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      res => {
        let response = res;
        const is = this.destroy(url);
        if (!is) {
          setTimeout(() => {}, 0);
        }
        if (!(response instanceof Blob)) {
          if (res.status !== 200) {
            // 后端服务在个别情况下回报201，待确认
            if (response.msg) Message.error(res.msg);
            return false;
          }
        }
        if (res.data.errcode === 0) {
          if (res.data.data && res.data.data.data.length != 0) {
            response.data.dataCode = 200;
          } else {
            response.data.dataCode = 400;
          }
        } else if (res.data.code == 200) {
          if (res.data.data.length != 0) {
            response.data = JSON.parse(
              JSON.stringify(response.data).replace(/code/g, "dataCode")
            );
          } else {
            response.data = JSON.parse(
              JSON.stringify(response.data).replace(/code/g, "dataCode")
            );
            response.data.dataCode = 400;
          }
        } else if (res.data.errcode != 0) {
          response.data.dataCode = 400;
        } else if (res.data.code == 500) {
          response.data = JSON.parse(
            JSON.stringify(response.data).replace(/code/g, "dataCode")
          );
          response.data.dataCode = 400;
        }
        return response;
      },
      error => {
        /*LoadingBar.error();*/
        if (error.response) {
          if (error.response.status === 401) {
            Message({
              showClose: true,
              message: "未登录，或登录失效，请登录!",
              type: "warning"
            });
          } else if (error.response.status === 403) {
            Message({
              showClose: true,
              message: "您本次请求未授权！",
              type: "warning"
            });
          }
        }
        if (error.code == "ECONNABORTED") {
          error.response = {
            data: {
              dataCode: "400",
              msg: "连接超时"
            }
          };
        }
        return error.response;
      }
    );
  }

  // 创建实例
  async create(baseUrl) {
    // const res = await getSignature();
    // signature = res.data.signature;
    // timestamp = res.data.timestamp;
    // nonce = res.data.nonce;
    // setSignature(signature, timestamp, nonce);
    // let timestamp = (Date.now() / 1000).toFixed();
    // let nonce = uuidv4();
    // let signature = sha256(timestamp + process.env.VUE_APP_TOKEN + nonce + timestamp).toUpperCase();
    const conf = {
      baseURL: baseUrl,
      timeout: 2000,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        // 标识为ajax请求
        "X-Requested-With": "XMLHttpRequest",
        "Terminal-Type": "vue_ui"
        //签名头
        // "x-tif-paasid": process.env.VUE_APP_PASSID,
        // "x-tif-signature": signature,
        // "x-tif-timestamp": timestamp,
        // "x-tif-nonce": nonce
      },
      // 携带认证信息，默认为false，这样在跨域请求下session无法获取信息
      withCredentials: true
    };
    return axios.create(conf);
  }
  async request(baseUrl, options) {
    const instance = await this.create(baseUrl);
    this.interceptors(instance, options.url);
    // options = Object.assign({}, options);
    options.method = options.method || "GET";
    if (options.method.toUpperCase() === "POST") {
      if (!options.params) options.params = {};
      let pageNo = "1";
      if (options.params.pageNo) pageNo = options.params.pageNo;
      let params = Object.assign(options.params, {
        pageNo
      });
      options = Object.assign(
        {
          data: {
            query: params
          }
        },
        options
      );
      options.params = {};
    } else {
      options = Object.assign(
        {
          pageNo: "1"
        },
        options
      );
    }

    this.queue[options.url] = instance;
    return instance(options);
  }
}
export default httpRequest;
