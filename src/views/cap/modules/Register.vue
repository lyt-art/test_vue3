<template>
  <div class="register">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
        <el-button @click="getCode()">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpsw">
        <el-input
          type="password"
          v-model="ruleForm.checkpsw"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="radio" label="1">同意协议并注册</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button @click="userRegister()" type="primary">完成注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getVerificationCode, postRegister } from "../../../api/apiService";
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        code: "",
        password: "",
        checkpsw: "",
      },
      radio: "1",
    };
  },
  mounted() {},
  methods: {
    getCode() {
      getVerificationCode(this.ruleForm.phone).then((res) => {
        if (res.status == 200 && res.data && res.data.dataCode == 200) {
          this.ruleForm.code = res.data.data;
        }
      });
    },
    userRegister() {
      let phone = this.ruleForm.phone;
      let code = this.ruleForm.code;
      let password = this.ruleForm.password;
      console.log(phone, password, code);
      postRegister({ phone, password, code }).then((res) => {
        if (res.status == 200 && res.data && res.data.dataCode == 200) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 400px;
  height: 400px;
  margin-top: 100px;
  margin-left: 100px;
}
</style>