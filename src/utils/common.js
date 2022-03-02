// 返回当前月份字符串 '202008'
export function getLastMonth() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() - 1;
  if (month === -1) {
    month = 12;
    year = year - 1;
  } else {
    month = month + 1;
  }
  if (month.toString().length === 1) {
    month = "0" + month;
  }
  return year + month;
}

export const symbol = (height, color) => {
  return {
    type: "polygon-3d", // autocasts as new PolygonSymbol3D()
    symbolLayers: [
      {
        type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
        size: height, //* (name === 'wasteOutputs' ? 4.5 :50),  // 100,000 meters in height
        material: {
          color: color
        }
      }
    ]
  };
};

//数值添加千位分隔符
export const numFormat = num => {
  num = num.toString().split("."); // 分隔小数点
  const arr = num[0].split("").reverse(); // 转换成字符数组并且倒序排列
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(","); // 添加分隔符
    }
    res.push(arr[i]);
  }
  res.reverse(); // 再次倒序成为正确的顺序
  if (num[1]) {
    // 如果有小数的话添加小数部分
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
};

//姓名脱敏
export const encryptName = str => {
  if (null != str && str != undefined) {
    if (str.length == 2) {
      return str.substring(0, 1) + "*"; //截取name 字符串截取第一个字符，
    } else if (str.length == 3) {
      return str.substring(0, 1) + "*" + str.substring(2, 3); //截取第一个和第三个字符
    } else if (str.length > 3) {
      return str.substring(0, 1) + "*" + "*" + str.substring(3, str.length); //截取第一个和大于第4个字符
    }
  } else {
    return "";
  }
};
//身份证号脱敏
export const encryptIdNo = str => {
  if (null != str && str != undefined) {
    const pat = /(\d{4})\d*(\d{4})/;
    return str.replace(pat, "$1***********$2");
  } else {
    return "";
  }
};
//手机号脱敏
export const encryptPhone = str => {
  if (null != str && str != undefined) {
    const pat = /(\d{3})\d*(\d{4})/;
    return str.replace(pat, "$1****$2");
  } else {
    return "";
  }
};
