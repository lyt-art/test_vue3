//全局过滤器，由main.js 统一注册

/**
 * 测试用
 */
export const filterAdd1 = (value, type) => {
  return `$${value}${type}`;
};
/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return `${time}${label}s`;
}

/**
 * @param {number} time
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), " minute");
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), " hour");
  } else {
    return pluralize(~~(between / 86400), " day");
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(value, digits) {
  const si = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" }
  ];
  for (let i = 0; i < si.length; i += 1) {
    if (value >= si[i].value) {
      return (
        (value / si[i].value)
          .toFixed(digits)
          .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol
      );
    }
  }
  return value.toString();
}
/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// 格式化 千分位函数
export function strToNumFormat(value) {
  if (value === null || value === "") {
    return 0;
  } else {
    if (parseFloat(value).toLocaleString() === "NaN") {
      return value;
    }
    return parseFloat(value).toLocaleString();
  }
}

// 数字用，隔开（千分位加逗号）
export function numFormat(num) {
  var c =
    num.toString().indexOf(".") !== -1
      ? num.toLocaleString()
      : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
}

/**
 * 10000 => "10,000"
 */
// export function toThousands(_num) {
//   if (_num == undefined || _num == null) {
//     _num = "---";
//   }
//   let str = `${_num}`;
//   let newStr = "";
//   let count = 0;
//   const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
//   // 当数字是整数
//   if (str.indexOf(".") == -1) {
//     if (reg.test(str)) {
//       if (str.indexOf("/") != -1) {
//         let lineData = str.split("/");
//         str = lineData[0];
//         hasLine = true;
//       }
//       var arr = [];
//       var i = 0;
//       while (i < str.length) {
//         var s = "";
//         while (str.charCodeAt(i) < 256) {
//           s = s + str.charAt(i);
//           i += 1;
//         }
//         arr.push(s);
//         var s = "";
//         while (str.charCodeAt(i) > 256) {
//           s = s + str.charAt(i);
//           i += 1;
//         }
//         arr.push(s);
//       }
//       for (let i = arr[0].length - 1; i >= 0; i--) {
//         if (count % 3 == 0 && count != 0) {
//           newStr = `${arr[0].charAt(i)},${newStr}`;
//         } else {
//           newStr = arr[0].charAt(i) + newStr;
//         }
//         count += 1;
//       }
//       if (hasLine) {
//         str = `${newStr + arr[1]}/${lineData[1]}`; //自动补小数点后两位
//       } else {
//         str = newStr + arr[1]; //自动补小数点后两位
//       }
//       return str;
//     } else {
//       for (let i = str.length - 1; i >= 0; i--) {
//         if (count % 3 == 0 && count != 0) {
//           newStr = `${str.charAt(i)},${newStr}`;
//         } else {
//           newStr = str.charAt(i) + newStr;
//         }
//         count += 1;
//       }
//       str = newStr; //自动补小数点后两位
//       return str;
//     }
//   }
//   // 当数字带有小数
//   else {
//     if (reg.test(str)) {
//       let hasLine = false;
//       if (str.indexOf("/") != -1) {
//         var lineData = str.split("/");
//         str = lineData[0];
//         hasLine = true;
//       }
//       var arr = [];
//       var i = 0;
//       while (i < str.length) {
//         var s = "";
//         while (str.charCodeAt(i) < 256) {
//           s = s + str.charAt(i);
//           i += 1;
//         }
//         arr.push(s);
//         var s = "";
//         while (str.charCodeAt(i) > 256) {
//           s = s + str.charAt(i);
//           i += 1;
//         }
//         arr.push(s);
//       }
//       for (let i = arr[0].indexOf(".") - 1; i >= 0; i--) {
//         if (count % 3 == 0 && count != 0) {
//           newStr = `${arr[0].charAt(i)},${newStr}`;
//         } else {
//           newStr = arr[0].charAt(i) + newStr; //逐个字符相接起来
//         }
//         count += 1;
//       }
//       arr[0] = newStr + `${arr[0]}00`.substr(`${arr[0]}00`.indexOf("."), 3);
//       if (hasLine) {
//         str = `${arr[0]}${arr[1]}/${lineData[1]}`;
//       } else {
//         str = arr[0] + arr[1];
//       }
//       return str;
//     } else {
//       for (let i = str.indexOf(".") - 1; i >= 0; i--) {
//         if (count % 3 == 0 && count != 0) {
//           newStr = `${str.charAt(i)},${newStr}`;
//         } else {
//           newStr = str.charAt(i) + newStr; //逐个字符相接起来
//         }
//         count += 1;
//       }
//       str = newStr + `${str}00`.substr(`${str}00`.indexOf("."), 3);
//       return str;
//     }
//   }
// }
// export function toThousands(_num) {
//     if(_num==undefined||_num==null){
//         _num = '---';
//     }
//     let str = _num+'';
//     let newStr = "";
//     let count = 0;
//     // 当数字是整数
//     if (str.indexOf(".") == -1) {
//         for (let i = str.length - 1; i >= 0; i--) {
//             if (count % 3 == 0 && count != 0) {
//                 newStr = str.charAt(i) + "," + newStr;
//             } else {
//                 newStr = str.charAt(i) + newStr;
//             }
//             count += 1;
//         }
//         str = newStr ; //自动补小数点后两位
//         return str;
//     }
//     // 当数字带有小数
//     else {
//         for (let i = str.indexOf(".") - 1; i >= 0; i--) {
//             if (count % 3 == 0 && count != 0) {
//                 newStr = str.charAt(i) + "," + newStr;
//             } else {
//                 newStr = str.charAt(i) + newStr; //逐个字符相接起来
//             }
//             count += 1;
//         }
//         str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
//         return str;
//     }
// }
/**
 * 南沙 => "南沙区"
 */
export function areaFormat(area) {
  if (area.indexOf("区") !== -1) {
    return area;
  } else {
    return `${area}区`;
  }
}
