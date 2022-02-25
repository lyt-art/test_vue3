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
          >
            <el-submenu
              :index="index"
              v-for="(item, index) in subMenu"
              :key="index"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-submenu
                :index="`1-${index1 + 1}`"
                v-for="(item1, index1) in item.child"
                :key="index1"
              >
                <template slot="title">{{ item1.name }}</template>
                <el-menu-item
                  :index="`1-${index1 + 1}-${index2 + 1}`"
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
              child: [{ name: "第三方插件测试", id: "test" }]
            }
          ]
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
                { name: "地", id: "land" }
              ]
            }
          ]
        }
      ]
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
      console.log(this.routePath);
      this.$router.push({ path: this.routePath });
    }
  }
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
    background-color: pink;
  }

  .navMenu {
    position: absolute;
    top: 50px;
    left: 0;
    width: 20%;
    height: 800px;

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
    width: 100%;
    height: 800px;
    border: 1px solid #000;
  }
}
</style>
