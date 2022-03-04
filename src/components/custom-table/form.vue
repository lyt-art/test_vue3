<template>
  <div class="ele-form">
    <div class="title">
      <div class="text">新增主题</div>
      <div class="icon" @click="closeForm()"><i class="el-icon-close"></i></div>
    </div>
    <el-form
      ref="form"
      :model="form"
      label-width="150px"
      :inline="true"
      class="demo-form-inline"
      label-position="left"
    >
      <el-form-item label="*主题名称">
        <el-input
          v-model="form.name"
          style="width: 195px; height: 30px"
        ></el-input>
      </el-form-item>
      <el-form-item label="*行政区划分">
        <el-input v-model="form.aaa" style="width: 195px; height: 30px"
          ><i class="el-icon-search"></i
        ></el-input>
      </el-form-item>
      <el-form-item label="*审理流程类型">
        <el-select v-model="form.bbb" style="width: 195px; height: 30px">
          <el-option label="中国" value="china"></el-option>
          <el-option label="美国" value="America"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="*是否实施主题">
        <el-select
          v-model="form.ccc"
          placeholder="标准主题"
          style="width: 195px"
        >
          <el-option label="中国" value="china"></el-option>
          <el-option label="美国" value="America"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="*主题编码">
        <el-input
          v-model="form.ddd"
          style="width: 195px; height: 30px"
        ></el-input>
      </el-form-item>
      <el-form-item label="*主题类型">
        <el-select v-model="form.eee" style="width: 195px; height: 30px">
          <el-option label="中国" value="china"></el-option>
          <el-option label="美国" value="America"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="*承诺办结时限计量">
        <el-input
          v-model="form.ddd"
          style="width: 195px; height: 30px"
        ></el-input>
      </el-form-item>
      <el-form-item label="*申报说明" class="item8">
        <el-input
          v-model="form.eee"
          style="width: 600px; height: 150px"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit" size="small">保存</el-button>
      <el-button type="info" plain size="small">关闭</el-button>
      <!-- <el-form-item label="爱好">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="画画" name="type"></el-checkbox>
          <el-checkbox label="吹泡泡" name="type"></el-checkbox>
          <el-checkbox label="放风筝" name="type"></el-checkbox>
          <el-checkbox label="看佩琦" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="onSubmit" size="small"
          >立即创建</el-button
        >
      </el-form-item> -->
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        aaa: "",
        bbb: "",
        ccc: "",
        ddd: "",
        eee: "",
        fff: "",
        type: []
      }
    };
  },
  methods: {
    closeForm() {
      this.$emit("isShowForm", false);
    },
    onSubmit() {
      console.log(
        "提交 -> " + this.form.name + " " + this.form.aaa + " " + this.form.bbb
      );
    }
  }
};
</script>

<style lang="less" scoped>
.ele-form {
  .title {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: rgb(17, 137, 235);

    .text {
      margin-left: 10px;
    }

    .icon {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  .demo-form-inline {
    .el-form-item {
      height: 30px;
      margin-bottom: 10px;
      margin-right: 30px;
    }
    /deep/ .el-form-item__label {
      padding-left: 10px;
    }
    /deep/ .el-input__inner {
      height: 30px;
    }
    /deep/ .el-button:nth-child(1) {
      height: 30px;
      margin-left: 300px;
      margin-top: 46px;
    }
    .item8 {
      /deep/ .el-input__inner {
        height: 80px;
      }
    }
  }
}
</style>
