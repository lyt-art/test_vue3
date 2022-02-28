<template>
  <div class="vuexTest">
    <div class="box state">
      <div class="title">state</div>
      <div class="content">{{ this.$store.state.admin }}</div>
    </div>
    <div class="box getters">
      <div class="title">getters</div>
      <div class="content">不带参：{{ this.$store.getters.adminGetters }}</div>
      <div class="content">
        带参：{{ this.$store.getters.pwsGettersWithParams("密码") }}
      </div>
    </div>
    <div class="box mutations">
      <div class="title">mutations</div>
      <div class="content">
        原数据：{{ this.$store.state.pws }}&nbsp;&nbsp;&nbsp;<el-button
          @click="changePws()"
          type="primary"
          plain
          >不带参改变</el-button
        >
      </div>
      <div class="content">
        原数据：{{ this.$store.state.pws }}&nbsp;&nbsp;&nbsp;<el-button
          @click="changePwsWithParams()"
          type="primary"
          plain
          >带参改变</el-button
        >
      </div>
    </div>
    <div class="box actions">
      <div class="title">actions</div>
    </div>
    <div class="box modules">
      <div class="title">modules</div>
      <div class="content">
        <el-button @click="addNum()" class="btn" type="info">+</el-button>
        <span class="text">{{ this.$store.state.demo.num }}</span>
        <el-button @click="decNum()" class="btn" type="info">-</el-button>
      </div>
    </div>
    <div class="box more">
      <div class="title">...state/...getters/...mutations</div>
      <div class="content">
        通过...mapState获取：{{ admin }} {{ pws }} <br />
        通过...mapState获取：{{ password }} <br />
        通过...mapGetters获取：{{ adminGetters }} <br />
        <el-button @click="pwsMutations()" type="primary" plain
          >通过...mapMutations获取：</el-button
        >{{ this.$store.state.pws }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  mounted() {
    // console.log(this.$store);
  },
  computed: {
    // vuex 辅助函数
    ...mapState(["admin", "pws"]),
    ...mapState({ password: state => state.pws }),
    ...mapGetters(["adminGetters"])
  },
  methods: {
    // mutations
    changePws() {
      this.$store.commit("pwsMutations");
    },
    changePwsWithParams() {
      this.$store.commit("pwsMutationsWithParams", "888888");
    },
    // modules
    addNum() {
      this.$store.commit("addNumMutations");
    },
    decNum() {
      this.$store.commit("decNumMutations");
    },
    // vuex 辅助函数
    ...mapMutations(["pwsMutations"])
  }
};
</script>

<style lang="less" scoped>
.vuexTest {
  position: relative;
  width: 100%;
  height: 100%;

  .box {
    position: absolute;
    width: 48%;
    height: 200px;
    border: 1px solid gray;

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

  .state {
    left: 1%;
    top: 10px;
  }

  .getters {
    left: 51%;
    top: 10px;
  }

  .mutations {
    left: 1%;
    top: 230px;

    .content {
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin-top: 10px;
    }
  }

  .actions {
    left: 51%;
    top: 230px;
  }

  .modules {
    left: 1%;
    top: 450px;
    height: 350px;

    .content {
      .btn {
        margin: 0 20px;
      }
    }
  }

  .more {
    left: 51%;
    top: 450px;
    height: 350px;
  }
}
</style>
