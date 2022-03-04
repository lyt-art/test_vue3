<template>
  <!-- 
    1、v-bind="$props": 可以将父组件的所有props下发给它的子组件,子组件需要在其props:{} 中定义要接受的props。
      vm.$props: 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。
    2、v-bind="$attrs": 将调用组件时的组件标签上绑定的非props的特性(class和style除外)向下传递。
      在子组件中应当添加inheritAttrs: false(避免父作用域的不被认作props的特性绑定应用在子组件的根元素上)。
    3、v-on="将父组件标签上的自定义事件向下传递其子组件可以直接通过emit(eventName)的方式调用。 
  -->
  <el-table :data="formatData" :row-style="showRow" v-bind="$attrs">
    <el-table-column v-if="columns.length === 0" width="150">
      <template slot-scope="scope">
        <span
          v-for="space in scope.row._level"
          :key="space"
          class="ms-tree-space"
        ></span>
        <span
          v-if="iconShow(0, scope.row)"
          class="tree-ctrl"
          @click="toggleExpanded(scope.$index)"
        >
          <i v-if="!scope.row._expanded" class="el-icon-arrow-right"></i>
          <i v-else class="el-icon-arrow-down"></i>
        </span>
        {{ scope.$index }}
      </template>
    </el-table-column>
    <el-table-column
      v-for="(column, index) in columns"
      v-else
      :key="column.value"
      :label="column.text"
      :width="column.width"
    >
      <template slot-scope="scope">
        <span v-if="index === 0">
          <span
            v-for="space in scope.row._level"
            :key="space"
            class="ms-tree-space"
          ></span>
        </span>
        <span
          v-if="iconShow(index, scope.row)"
          class="tree-ctrl"
          @click="toggleExpanded(scope.$index)"
        >
          <i v-if="!scope.row._expanded" class="el-icon-arrow-right"></i>
          <i v-else class="el-icon-arrow-down"></i>
        </span>
        {{ scope.row[column.value] }}
      </template>
    </el-table-column>
    <el-table-column align="center" width="300" label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="itemClick(scope.row, 1)">查看</el-button>
        <el-button type="text" @click="itemClick(scope.row, 2)">设置</el-button>
        <el-button type="text" @click="itemClick(scope.row, 3)"
          >添加子机构</el-button
        >
      </template>
    </el-table-column>
    <slot />
  </el-table>
</template>

<script>
import treeToArray from "../../utils/dataTranslate";
export default {
  name: "TreeTable",
  props: {
    // 表格数据
    data: {
      type: [Array, Object],
      required: true
    },
    // 表格标签
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源 树形==>数组
    formatData: function() {
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      const func = this.evalFunc || treeToArray;
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll];
      return func.apply(null, args);
    }
  },
  methods: {
    itemClick: function(row, value) {
      this.$emit("parnet-click", row, value);
    },
    // 行加载动画效果
    showRow: function(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? { animation: "treeTableShow 1s;-webkit-animation:treeTableShow 1s" }
        : {
            display: "none"
          };
    },
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      console.log();
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    }
  }
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style scoped>
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
}
.ms-tree-space::before {
  content: "";
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: #2196f3;
  margin-left: -18px;
}
</style>
