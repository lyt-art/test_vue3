<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="userLogin()" type="primary">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { postLogin } from "../../../api/apiService";
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      postLogin(this.ruleForm).then((res) => {
        // console.log(res, "cap======================");
        if(res.status == 200 && res.data && res.data.dataCode == 200) {
          
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  height: 200px;
  margin-top: 100px;
  margin-left: 100px;
}
</style>