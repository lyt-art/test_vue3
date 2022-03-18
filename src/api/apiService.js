import $axios from "../axiosConfig/axios_request";
// import axios from "axios";
import API from "./index";

export const getMenuList = params => {
  return $axios.request(API.baseUrl.menu, {
    url: "/getMenuList",
    methods: "get",
    data: params
  });
};

// 获取验证码 /user/passport/sendCode/电话号码
export const getVerificationCode = params => {
  return $axios.request(API.baseUrl.api, {
    url: `/user/passport/sendCode/${params}`,
    methods: "get",
  });
};

// 注册提交表单 /api/user/passport/register 
export const postRegister = params => {
  return $axios.request(API.baseUrl.api, {
    url: "/user/passport/register",
    methods: "post",
    data: params
  });
};

// 登录 /api/user/passport/login
export const postLogin = params => {
  return $axios.request(API.baseUrl.api, {
    url: "/user/passport/login",
    methods: "post",
    data: params
  });
};