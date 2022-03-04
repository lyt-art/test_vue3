<template>
  <div class="manage">
    <!-- 表单弹框 -->
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <!-- 引进form组件 -->
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        ref="form"
      ></common-form>
      <!-- 表单底部插槽 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 头部工具栏 -->
    <div class="manage-header">
      <el-button type="primary" @click="addUser" size="min">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary" @click="getList(searchFrom.keyword)"
          >搜索</el-button
        >
      </common-form>
    </div>
    <!--依次是: 表格数据 表格标签数据 分页数据  列表方法 更新方法 删除方法-->
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from "../../../components/web-table/form.vue";
import CommonTable from "../../../components/web-table/table.vue";
export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      // 判断是新增用户还是更新用户
      operateType: "add",
      // 表单显示
      isShow: false,
      // 表格数据
      tableData: [
        {
          name: "cap",
          age: 23,
          sexLabel: "女",
          birth: "98-11-12",
          addr: "jhuiaHISAUHXKANCIWJHCIWU"
        },
        {
          name: "xz",
          age: 30,
          sexLabel: "男",
          birth: "91-10-05",
          addr: "aafewgrehtyjymkykmuilu"
        },
        {
          name: "wyb",
          age: 24,
          sexLabel: "男",
          birth: "95-08-05",
          addr: "scaerw4ytrnbhnym"
        }
      ],
      // 表格标签
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "age",
          label: "年龄"
        },
        {
          prop: "sexLabel",
          label: "性别"
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200
        },
        {
          prop: "addr",
          label: "地址",
          width: 320
        }
      ],
      // 表格分页
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      // 表单数据:新增一行数据
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: ""
      },
      // 标签数据:新增表单数据形式（例如表单每一项名称）
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input"
        },
        {
          model: "age",
          label: "年龄",
          type: "input"
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            }
          ]
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date"
        },
        {
          model: "addr",
          label: "地址",
          type: "input"
        }
      ],
      searchFrom: {
        keyword: ""
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input"
        }
      ]
    };
  },
  methods: {
    // 获取表格数据
    getList(name = "") {
      console.log(name, "name");
      console.log(this.config.page, "this.config.page");
      //       this.config.loading = true;
      //       // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      //       name ? (this.config.page = 1) : "";
      //       this.$http
      //         .get("/api/user/getUser", {
      //           params: {
      //             page: this.config.page,
      //             name
      //           }
      //         })
      //         .then(res => {
      //           this.tableData = res.data.list.map(item => {
      //             item.sexLabel = item.sex === 0 ? "女" : "男";
      //             return item;
      //           });
      //           this.config.total = res.data.count;
      //           this.config.loading = false;
      //         });
    },

    // 新增用户
    addUser() {
      this.operateForm = {};
      this.operateType = "add";
      this.isShow = true;
    },

    // 编译用户
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
      console.log(row, "row");
    },

    // 提交新增(修改)表单数据
    confirm() {
      // 修改
      if (this.operateType === "edit") {
        console.log(this.operateForm, "edit");
        // this.$http.post("/api/user/edit", this.operateForm).then(res => {
        //   console.log(res.data);
        //   this.isShow = false;
        //   this.getList();
        // });
      } else {
        console.log(this.operateForm, "add");
        // this.$http.post("/api/user/add", this.operateForm).then(res => {
        //   console.log(res.data);
        //   this.isShow = false;
        //   this.getList();
        // });
      }
    },

    // 删除用户
    delUser(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let id = row.id;
          this.$http
            .get("/api/user/del", {
              params: {
                id
              }
            })
            .then(res => {
              console.log(res.data);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="less" scoped>
// @import "@/assets/scss/common";
.manage-header {
  display: flex;
  .el-button {
    height: 40px;
  }
}
</style>
