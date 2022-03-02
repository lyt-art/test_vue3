<template>
  <div class="test">
    <div class="box jsonp">
      <div class="title">jsonp</div>
      <el-button @click="sendJsonp()" type="primary">jsonp发送</el-button>
      <div class="content">{{ jsonp_res }}</div>
      <el-button @click="sendJsp()" type="primary">jsp发送</el-button>
      <div class="content">{{ jsp_res }}</div>
    </div>
    <div class="box qs">
      <div class="title">qs(解析url)</div>
      <div class="one">
        <div class="input">admin=cap&pws=123456</div>
        <el-button @click="changeToObj()" class="button" type="primary"
          >转换</el-button
        >
        <div class="content">{{ qsStringfy_res }}</div>
      </div>
      <div class="two">
        <div class="input">{admin:"cap",pws:"123456"}</div>
        <el-button @click="changeToStr()" class="button" type="primary"
          >转换</el-button
        >
        <div class="content">{{ qsParse_res }}</div>
      </div>
    </div>
    <div class="box moment">
      <div class="title">moment</div>
      <div @click="getTime(1)" class="text">
        点击获取当前时间(YYYY-MM-DD)：<span>{{ moment_res }}</span>
      </div>
      <div @click="getTime(2)" class="text">
        点击获取一个月前时间(YYYY-MM-DD)：<span>{{ moment_res1 }}</span>
      </div>
      <div @click="getTime(3)" class="text">
        点击获取一年后当前时间(YYYY-MM-DD)：<span>{{ moment_res2 }}</span>
      </div>
    </div>
    <div class="box filters">
      <div class="title">filters</div>
      <div class="text">
        10000过滤 ==><span>{{ 10000 | numberFormatter }}</span>
      </div>
      <div class="text">
        1823过滤 ==><span>{{ 1823 | strToNumFormat }}</span>
      </div>
      <div class="text">
        1823.95过滤 ==><span>{{ 1823.95 | numFormat }}</span>
      </div>
    </div>
    <div class="box drag">
      <div class="title">drag</div>
      <div class="content" v-drag>请拖拽此盒子</div>
    </div>
    <div class="box axios">
      <div class="title">axios</div>
      <div class="content">
        <el-button @click="getMenuList()" class="button" type="primary"
          >获取菜单</el-button
        >
        <div class="text">封装的axios：{{ axios_res }}</div>
        <div class="text">原装的axios：{{ axs_res }}</div>
      </div>
    </div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
import { getMenuList } from "../../api/apiService";
export default {
  data() {
    return {
      jsonp_res: null,
      jsp_res: null,
      qsStringfy_res: null,
      qsParse_res: null,
      moment_res: null,
      moment_res1: null,
      moment_res2: null,
      filter_res: null,
      axios_res: null,
      axs_res: null
    };
  },

  methods: {
    // 需要启动db.json 命令行: json-server --watch db.json
    // jsonp使用
    sendJsonp() {
      this.$jsonp("http://localhost:3000/getMenuList")
        .then(res => {
          this.jsonp_res = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendJsp() {
      let params = {
        title: "json-server",
        author: "typicode"
      };
      this.$jsp("http://localhost:3000/posts?", params)
        .then(res => {
          this.jsp_res = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // qs使用
    changeToObj() {
      let str = "admin=cap&pws=123456";
      this.qsStringfy_res = this.$qs.parse(str);
    },
    changeToStr() {
      let obj = { admin: "cap", pws: "123456" };
      this.qsParse_res = this.$qs.stringify(obj);
    },
    // moment使用
    getTime(params) {
      switch (params) {
        case 1:
          this.moment_res = this.$moment().format("YYYY-MM-DD");
          break;
        case 2:
          this.moment_res1 = this.$moment()
            .subtract(1, "months")
            .format("YYYY-MM-DD");
          break;
        case 3:
          this.moment_res2 = this.$moment()
            .add(1, "years")
            .format("YYYY-MM-DD");
          break;
      }
    },
    // axios使用
    getMenuList() {
      // 自己封装的axios
      getMenuList().then(res => {
        // console.log(res, "res");
        this.axios_res = res.data;
      });
      // 原装axios
      this.$axs("/axs").then(res => {
        // console.log(res, "$axs");
        this.axs_res = res.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.test {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  .box {
    width: 18%;
    height: 40%;
    margin-left: 1%;
    border: 1px solid #000;

    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      background-color: #2f3033;
      margin-bottom: 10px;
    }
  }

  .jsonp {
    .content {
      width: 95%;
      height: 80px;
      border: 1px solid #2f3033;
      margin: 1%;
    }
  }

  .qs {
    .one,
    .two {
      position: relative;
      width: 100%;
      height: 40%;
      .input {
        position: absolute;
        left: 0;
        top: 0;
        width: 80%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid gray;
        margin: 1%;
      }
      .button {
        position: absolute;
        right: 9px;
        top: 4px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        padding: 0;
      }
      .content {
        position: absolute;
        left: 0px;
        top: 35px;
        width: 90%;
        height: 80px;
        border: 1px solid gray;
        margin: 1%;
      }
    }
  }

  .moment {
    .text {
      width: 95%;
      height: 80px;
      border: 1px solid gray;
      margin: 1%;
      cursor: pointer;
    }
  }

  .drag {
    position: relative;
    .content {
      position: absolute;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: gray;
      cursor: pointer;
    }
  }

  .axios {
    .content {
      .button {
        margin-bottom: 10px;
      }
      .text {
        width: 95%;
        height: 80px;
        border: 1px solid #2f3033;
        margin: 1%;
      }
    }
  }
}
</style>
