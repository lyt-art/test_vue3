<template>
  <div>
    <div class="irregular-table">
      <thead>
        <tr v-for="(items, indexs) in headArr" :key="indexs">
          <th
            v-for="(item, index) in items"
            :key="index"
            :rowspan="item.rowspan"
            :colspan="item.colspan"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody v-if="needRowSpan.length > 0">
        <tr v-for="(items, indexs) in dataList" :key="indexs">
          <td
            v-for="(item, index) in items.tdList"
            :key="index"
            :rowspan="resetRowSpan(indexs, item)"
          >
            {{ items[item] }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(items, indexs) in dataList" :key="indexs">
          <td v-for="(item, index) in colKeyList" :key="index">
            {{ items[item] }}
          </td>
        </tr>
      </tbody>
    </div>
    <div class="el-irregular-table">
      <ElIrregularTable />
    </div>
  </div>
</template>

<script>
import ElIrregularTable from "@/components/el-irregular-table";
export default {
  data() {
    return {
      headArr: [[]], // 表头
      head: [
        {
          title: "1",
          key: "1",
          hasrowspan: true,
        },
        {
          title: "2",
          key: "2",
          children: [
            {
              title: "2-1",
              key: "2-1",
              align: "center",
            },
            {
              title: "2-2",
              key: "2-2",
              align: "center",
            },
          ],
        },
        {
          title: "3",
          key: "3",
          children: [
            {
              title: "3-1",
              key: "3-1",
              align: "center",
            },
          ],
        },
        {
          title: "4",
          key: "4",
          children: [
            {
              title: "4-1",
              key: "4-1",
              align: "center",
            },
            {
              title: "4-2",
              key: "4-2",
              align: "center",
            },
            {
              title: "4-3",
              key: "4-3",
              align: "center",
            },
            {
              title: "4-4",
              key: "4-4",
              align: "center",
            },
          ],
        },
        {
          title: "5",
          key: "5",
          hasrowspan: true,
        },
      ],
      maxRow: 1,
      colKeyList: [],
      dataList: [
        {
          1: "zz",
          "2-1": 0,
          "2-2": 0,
          "3-1": 0,
          "4-1": 0,
          "4-2": 0,
          "4-3": 0,
          "4-4": 0,
          5: 0,
        },
        {
          1: "zz",
          "2-1": 0,
          "2-2": 0,
          "3-1": 0,
          "4-1": 0,
          "4-2": 0,
          "4-3": 0,
          "4-4": 0,
          5: 0,
        },
        {
          1: "xx",
          "2-1": 0,
          "2-2": 0,
          "3-1": 0,
          "4-1": 0,
          "4-2": 0,
          "4-3": 0,
          "4-4": 0,
          5: 2,
        },
        {
          1: "xx",
          "2-1": 0,
          "2-2": 0,
          "3-1": 0,
          "4-1": 0,
          "4-2": 0,
          "4-3": 0,
          "4-4": 0,
          5: 3,
        },
      ],
      needRowSpan: [],
      span: {},
    };
  },
  components: {
    ElIrregularTable,
  },
  mounted() {
    this.maxRow = this.getMaxRow(this.head);
    this.headHandle(this.head);
    this.dataHandle(this.dataList, this.needRowSpan);
  },
  methods: {
    // 获取表头最多多少行
    getMaxRow(head) {
      let max = 0;
      function each(data, floor) {
        data.forEach((e) => {
          if (floor > max) {
            max = floor;
          }
          if (e.children && e.children.length > 0) {
            each(e.children, floor + 1);
          }
        });
      }
      each(head, 1);
      return max;
    },
    // 获取表头子元素最多多少列
    getMaxCol(items) {
      let max = 0;
      function each(data) {
        if (max < data.length) {
          max = data.length;
        }
        data.forEach((item) => {
          if (item.children) {
            each(item.children);
          }
        });
      }
      each(items);
      return max;
    },
    headHandle(head) {
      const that = this;
      const maxRow = this.maxRow;
      function each(data, index) {
        if (that.headArr[index] === undefined) {
          that.headArr[index] = [];
        }
        data.forEach((e) => {
          const obj = {
            title: e.title,
            key: e.key,
            rowspan: maxRow,
            colspan: 1,
          };
          if (e.children) {
            obj.colspan = that.getMaxCol(e.children);
            obj.rowspan = maxRow - that.getMaxRow(e.children);
            console.log(obj.colspan, "cap==========================colspan");
            console.log(obj.rowspan, "cap==========================rowspan");
          } else {
            that.colKeyList.push(e.key);
            if (e.hasrowspan) {
              //  如果存在hasrowspan属性并且值为true，则表明该key列存在跨行
              that.needRowSpan.push(e.key);
            }
          }
          that.headArr[index].push(obj);
          if (e.children && e.children.length > 0) {
            each(e.children, index + 1);
          }
        });
      }
      each(head, 0);
    },
    resetRowSpan(row, key) {
      if (this.span[key] && this.span[key][row]) {
        return this.span[key][row];
      }
      return 1;
    },
    dataHandle(dataList, needRowSpan) {
      needRowSpan.forEach((key) => {
        const sum = {};
        let i = 0;
        let k = 0;
        const that = this;
        for (let j = 0; j < dataList.length; j += 1) {
          i += 1;
          let tdList = [];
          if (dataList[j].tdList) {
            tdList = [...dataList[j].tdList];
          } else {
            tdList = [...that.colKeyList];
          }
          if (
            dataList[j - 1] &&
            (dataList[j][key] === dataList[j - 1][key] || !dataList[j][key])
          ) {
            const index = tdList.indexOf(key);
            if (index > -1) {
              tdList.splice(index, 1);
            }
          }
          dataList[j].tdList = tdList;
          if (dataList[j + 1] && dataList[j + 1][key]) {
            if (dataList[j][key] !== dataList[j + 1][key]) {
              sum[k] = i;
              i = 0;
              k = j + 1;
            }
          } else if (!dataList[j + 1]) {
            sum[k] = i;
          }
        }
        this.span[key] = sum;
      });
      console.log(this.span);
      this.showTable = true;
    },
  },
};
</script>

<style lang="less" scoped>
.irregular-table {
  width: 800px;
  height: 400px;
  border: 1px solid #000;

  thead {
    tr {
      width: 100%;
      height: 50px;

      th {
        width: 100px;
        height: 100%;
        border: 1px solid #000;
      }
    }
  }

  tbody {
    tr {
      width: 100%;
      height: 50px;

      td {
        width: 100px;
        height: 100%;
        border: 1px solid #000;
      }
    }
  }
}

.el-irregular-table {
  width: 1000px;
  height: 400px;
  border: 1px solid pink;
  margin-top: 50px;
}
</style>