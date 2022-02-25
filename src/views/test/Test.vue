<template>
  <div class="test">
    <div class="box jsonp">
      <div class="title">jsonp</div>
      <el-button @click="sendJsonp()" type="primary">jsonp发送</el-button>
      <div class="content">{{ jsonp_res }}</div>
      <el-button @click="sendJsp()" type="primary">jsp发送</el-button>
      <div class="content">{{ jsp_res }}</div>
    </div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonp_res: null,
      jsp_res: null
    };
  },
  methods: {
    // 启动db.json 命令行: json-server --watch db.json
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
      width: 100%;
      height: 80px;
    }
  }
}
</style>
