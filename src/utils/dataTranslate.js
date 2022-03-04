// 把每一条数据从它的父级中取出来，把树形结构数据转换成数组数据
import Vue from "vue";

// function DataTransfer(data) {
//   if (!(this instanceof DataTransfer)) {
//     return new DataTransfer(data, null, null);
//   }
// }

// DataTransfer.treeToArray = function(data, parent, level, expandedAll) {
//   let tmp = [];
//   Array.from(data).forEach(function(record) {
//     if (record._expanded === undefined) {
//       Vue.set(record, "_expanded", expandedAll);
//     }
//     if (parent) {
//       Vue.set(record, "_parent", parent);
//     }
//     let _level = 0;
//     if (level !== undefined && level !== null) {
//       _level = level + 1;
//     }
//     Vue.set(record, "_level", _level);
//     tmp.push(record);
//     if (record.children && record.children.length > 0) {
//       let children = DataTransfer.treeToArray(
//         record.children,
//         record,
//         _level,
//         expandedAll
//       );
//       tmp = tmp.concat(children);
//     }
//   });
//   return tmp;
// };

// export default DataTransfer;

export default function treeToArray(
  data,
  expandAll,
  parent = null,
  level = null
) {
  let tmp = [];
  Array.from(data).forEach(function(record) {
    if (record._expanded === undefined) {
      Vue.set(record, "_expanded", expandAll);
    }
    let _level = 1;
    if (level !== undefined && level !== null) {
      _level = level + 1;
    }
    Vue.set(record, "_level", _level);
    // 如果有父元素
    if (parent) {
      Vue.set(record, "parent", parent);
    }
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, expandAll, record, _level);
      tmp = tmp.concat(children);
    }
  });
  return tmp;
}
