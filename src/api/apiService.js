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
