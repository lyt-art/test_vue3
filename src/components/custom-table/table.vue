<template>
  <div class="ele-table">
    <div class="head">
      <div class="left">
        <el-button @click="addItem()" type="primary" size="small"
          >新增主题</el-button
        >
      </div>
      <div class="right">
        <div class="select">
          <el-select v-model="value" placeholder="全部分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input">
          <el-input v-model="input" placeholder="输入关键字"></el-input>
        </div>
        <div class="btn">
          <el-button type="primary" @click="onSubmit" size="small"
            >查询</el-button
          >
          <el-button type="info" plain size="small">清空</el-button>
        </div>
      </div>
    </div>
    <div class="box">
      <el-table
        :data="tableData"
        height="90%"
        stripe
        v-loading="config.loading"
      >
        <!--第一行为序号 默认写死-->
        <el-table-column label="序号" width="85">
          <!--slot-scope="scope" 这里取到当前单元格,scope.$index就是索引 默认从0开始这里从1开始-->
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{
              (config.page - 1) * 20 + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
        <!--show-overflow-tooltip 当内容过长被隐藏时显示 tooltip-->
        <el-table-column
          show-overflow-tooltip
          v-for="item in tableLabel"
          :key="item.prop"
          :label="item.label"
          :width="item.width ? item.width : 125"
        >
          <!--其实可以在上面:prop="item.prop"就可以显示表单数据 这里设置插槽的方式话更加灵活 我们可以写样式-->
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
        <!--操作-->
        <el-table-column label="操作" min-width="180">
          <template slot-scope="scope">
            <el-button size="min" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button size="min" type="danger" @click="handleDelete(scope.row)"
              >删除</el-button
            >
            <!-- <i class="el-icon-edit"></i>
            <i class="el-icon-plus"></i>
            <i class="el-icon-delete"></i>
            <i class="el-icon-document-copy"></i> -->
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <el-pagination
        class="pager"
        layout="prev, pager, next"
        :total="config.total"
        :current-page.sync="config.page"
        @current-change="changePage"
        :page-size="20"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "ascsbfgdnhgfghftgdrexgsxzf",
          type: "scsvdsvd",
          coding: "scdwdw",
          is: "标准主题",
          version: "V1.0"
        },
        {
          name: "ascsbfgdnhgfghftgdrexgsxzf",
          type: "scsvdsvd",
          coding: "scdwdw",
          is: "标准主题",
          version: "V1.0"
        },
        {
          name: "ascsbfgdnhgfghftgdrexgsxzf",
          type: "scsvdsvd",
          coding: "scdwdw",
          is: "标准主题",
          version: "V1.0"
        },
        {
          name: "ascsbfgdnhgfghftgdrexgsxzf",
          type: "scsvdsvd",
          coding: "scdwdw",
          is: "标准主题",
          version: "V1.0"
        }
      ],
      tableLabel: [
        {
          prop: "name",
          label: "主题名称",
          width: 320
        },
        {
          prop: "type",
          label: "主题类型"
        },
        {
          prop: "coding",
          label: "主题编码"
        },
        {
          prop: "is",
          label: "是否实施主题",
          width: 200
        },
        {
          prop: "version",
          label: "最新版本"
        },
        {
          prop: "handle",
          label: "操作",
          width: 320
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    };
  },
  props: {
    //     tableData: Array,
    //     tableLabel: Array,
    //     config: Object
  },
  methods: {
    //   添加主题
    addItem() {
      this.$emit("isShowForm", true);
    },
    //更新
    handleEdit(row) {
      this.$emit("edit", row);
    },
    //删除
    handleDelete(row) {
      this.$emit("del", row);
    },
    //分页
    changePage(page) {
      this.$emit("changePage", page);
    }
  }
};
</script>

<style lang="less" scoped>
.ele-table {
  .head {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: rgb(238, 238, 238);

    .left {
      float: left;
    }

    .right {
      float: right;
      display: flex;
      width: 500px;

      .select {
        .el-select {
          width: 120px;
          height: 32px;
        }
        /deep/ .el-input__inner {
          height: 32px;
        }
      }
      .input {
        .el-input {
          width: 250px;
          height: 32px;
        }
        /deep/ .el-input__inner {
          height: 32px;
        }
      }
      .btn {
        .el-button {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
