<template>
  <div class="tree">
    <div class="btn" :class="option ? 'active_base' : 'active_common'">
      <div
        class="base_btn"
        @click="
          () => {
            this.option = true;
          }
        "
      >
        基础图层
      </div>
      <div
        class="common_btn"
        @click="
          () => {
            this.option = false;
          }
        "
      >
        常用图层
      </div>
    </div>
    <div class="search">
      <el-input placeholder="" v-model="filterText"> </el-input>
      <div class="text">{{ filterText || "搜索" }}</div>
      <i class="el-icon-search"></i>
    </div>
    <div class="treeNode">
      <el-tree
        class="filter-tree"
        :data="option ? base_data : common_data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <img :src="data.icon" alt="" />
          <div class="content">{{ data.label }}</div>
          <div class="num">{{ data.count || "0" }}</div>
        </div>
      </el-tree>
    </div>
  </div>
</template>
<script>
import { baseData } from "./landSect2/baseData.js";
import { commonData } from "./landSect2/common.js";
export default {
  data() {
    return {
      option: true, //控制按钮
      filterText: "", //搜索框过滤文字
      base_data: [], //树形结构展示文字
      baseData: [], //引用的静态数据
      common_data: [],
      commonData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  components: {
    // vueSeamlessScroll,
  },
  mounted() {
    let baseArr = this.loopLayerData(baseData);
    this.base_data = baseArr;

    let comArr = this.loopLayerData(commonData);
    this.common_data = comArr;
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    loopLayerData(arr) {
      arr.forEach((item) => {
        // console.log(item);
        // let parentCount = this.handleCount(item.code);
        let parentCount = 0;
        if (item.children) {
          let childArr = this.loopLayerData(item.children);
          childArr.forEach((child) => {
            parentCount += child.count;
          });
        }
        if (!item.icon && parentCount) {
          let url = "";
          try {
            url = require("@/assets/szg_land/cluster/" + item.code + ".png");
          } catch (e) {
            url = require("@/assets/szg_land/map-tree/map_all.png");
          }
          item.icon = url;
        }
        item.count = parentCount;
        item.disabled = parentCount ? false : true;
      });
      return arr;
    },
    //     handleCount(key) {
    //       let arr = this.$store.state.layerCounts,
    //         i = arr.length;
    //       if (arr.length) {
    //         while (i--) {
    //           if (arr[i].layerCode == key) {
    //             return arr[i].number;
    //           }
    //         }
    //       }
    //       return 0;
    //     },
  },
};
</script>

<style lang="less" scoped>
.tree {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 480px;
  height: 810px;
  background: url("../../../assets/szg_land/treeImg2.png") no-repeat center
    center;

  .btn {
    display: flex;
    flex-direction: row;
    height: 61px;
    width: 429px;
    font-size: 28px;
    font-family: siyuanyahei_zhongwen;
    color: #fff;

    &.active_base {
      background: url("../../../assets/szg_land/you.png") no-repeat center
        center;
    }
    &.active_common {
      background: url("../../../assets/szg_land/zuo.png") no-repeat left center;
    }
    .base_btn {
      width: 168.5px;
      height: 61px;
      padding: 15px 28px;
      cursor: pointer;
    }
    .common_btn {
      width: 168.5px;
      height: 61px;
      padding: 15px 28px;
      margin-left: 56px;
      cursor: pointer;
    }
  }

  .search {
    margin-top: 20px;

    ::v-deep .el-input__inner {
      width: 92%;
      height: 44px;
      margin: 0 20px;
      background-color: #163158 !important;
      border: 0px !important;
    }

    .text {
      font-size: 22px;
      font-family: siyuanyahei_zhongwen;
      position: absolute;
      color: #cbddff;
      top: 11%;
      left: 7%;
    }
    .el-icon-search:before {
      position: absolute;
      top: 11.3%;
      left: 88%;
      color: #cbddff;
      font-size: 24px;
    }
  }

  .treeNode {
    height: 635px;
    margin: 0 20px;
    padding: 15px 5px;
    background: #020f2b;
    overflow-y: scroll;
    .el-tree {
      background-color: unset !important;
    }
    ::v-deep .el-checkbox__input {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #4f9efd;
      &.is-disabled {
        border-color: gray;
      }
    }
    ::v-deep .el-checkbox__inner {
      width: 14px;
      height: 14px;
      background-color: unset !important;
      border: none !important;
      border-radius: unset !important;
    }
    ::v-deep .el-tree-node__content {
      height: 26px;
    }
    ::v-deep .el-tree-node__content:hover {
      background-color: transparent !important;
    }
    .custom-tree-node {
      display: flex;
      flex-direction: row;
      img {
        width: 20px;
        height: 20px;
        margin: 3px 10px 0 2px;
      }
      .content {
        color: #ffffff;
        font-size: 22px;
      }
      .num {
        position: absolute;
        right: 0px;
        font-size: 22px;
        color: #4f9efd;
      }
    }
  }

  .treeNode::-webkit-scrollbar {
    width: 4px;
  }
  .treeNode::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0.01rem rgba(0, 0, 0, 0.2);
    background: rgba(101, 161, 216, 1);
  }
  .treeNode::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.01rem rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>