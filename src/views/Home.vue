<template>
  <div class="home">
    <div class="header">首页</div>
    <div class="navMenu">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2f3033"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu
              :index="`${index + 1}`"
              v-for="(item, index) in subMenu"
              :key="index"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-submenu
                :index="`${index + 1}-${index1 + 1}`"
                v-for="(item1, index1) in item.child"
                :key="index1"
              >
                <template slot="title">{{ item1.name }}</template>
                <el-menu-item
                  :index="`${index + 1}-${index1 + 1}-${index2 + 1}`"
                  v-for="(item2, index2) in item1.child"
                  :key="index2"
                  @click="gotoRoute(item2.id)"
                  >{{ item2.name }}</el-menu-item
                >
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="box">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      routePath: "",
      subMenu: [
        {
          name: "cap",
          id: "cap",
          child: [
            {
              name: "测试",
              id: "test",
              child: [
                { name: "第三方插件测试", id: "plugin-test" },
                { name: "vuex使用", id: "vuex-test" },
                { name: "知识点", id: "other-test" },
              ],
            },
            {
              name: "功能模块",
              id: "modules",
              child: [
                { name: "登录", id: "login" },
                { name: "注册", id: "register" },
                { name: "图片放大镜", id: "zoom" },
                { name: "不规则表格", id: "irregular-table" },
                { name: "树形表格", id: "tree-table" },
                { name: "表格＋表单", id: "web-table" },
                { name: "全国各地地图echart", id: "map-chart" },
                { name: "广州市地图echarts", id: "gzmap-chart" },
                { name: "自定义轮播图", id: "custom-swiper" },
              ],
            },
          ],
        },
        {
          name: "augur",
          id: "augur",
          child: [
            {
              name: "szg",
              id: "szg",
              child: [
                { name: "城市基础要素", id: "csjcys" },
                { name: "地-轮播图", id: "land-sect-1" },
                { name: "地-级联选择器", id: "land-sect-2" },
              ],
            },
            {
              name: "city",
              id: "city",
              child: [{ name: "城市", id: "cityweb" }],
            },
          ],
        },
      ],
    };
  },
  // watch: {
  //   $route: {
  //     handler(to) {
  //       this.currentRoute = to.name;
  //       console.log(to);
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoRoute(params) {
      this.routePath = `/${params}`;
      // console.log(this.routePath);
      this.$router.push({ path: this.routePath });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 23px;
    background-color: rgba(4, 31, 82, 0.712);
  }

  .navMenu {
    position: absolute;
    top: 50px;
    left: 0;
    width: 20%;
    height: 800px;
    background-color: #2f3033;

    .tac {
      width: 100%;
      height: 100%;

      .el-col.el-col-12 {
        width: 100%;
        height: 100%;
      }
    }
  }

  .box {
    position: absolute;
    top: 50px;
    left: 20%;
    width: 80%;
    height: 800px;
  }
}
</style>
