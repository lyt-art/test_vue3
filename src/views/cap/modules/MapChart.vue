<template>
  <div class="mapChart">
    <div class="chinaChart">
      <div class="china-map" ref="chinaMap"></div>
    </div>
    <div class="provinceChart">
      <div class="province-map" ref="provinceMap"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
export default {
  data() {
    return {
      province: "广东",
    };
  },
  mounted() {
    this.initImportFile();
    this.initChinaMap();
    this.initProvinceMap();
  },
  methods: {
    // 初始化省份
    initImportFile() {
      var filaName = {
        浙江: "zhejiang.js",
        安徽: "anhui.js",
        澳门: "aomen.js",
        北京: "beijing.js",
        重庆: "chongqing.js",
        福建: "fujian.js",
        甘肃: "gansu.js",
        广东: "guangdong.js",
        广西: "guangxi.js",
        贵州: "guizhou.js",
        海南: "hainan.js",
        河北: "hebei.js",
        黑龙江: "heilongjiang.js",
        河南: "henan.js",
        湖北: "hubei.js",
        湖南: "hunan.js",
        江苏: "jiangsu.js",
        江西: "jiangxi.js",
        吉林: "jilin.js",
        辽宁: "liaoning.js",
        内蒙古: "neimenggu.js",
        宁夏: "ningxia.js",
        青海: "qinghai.js",
        山东: "shandong.js",
        上海: "shanghai.js",
        山西: "shanxi.js",
        山西1: "shanxi1.js",
        四川: "sichuan.js",
        台湾: "taiwan.js",
        天津: "tianjin.js",
        香港: "xianggang.js",
        新疆: "xinjiang.js",
        西藏: "xizang.js",
        云南: "yunnan.js",
      };
      require(`echarts/map/js/province/${filaName[this.province]}`);
    },
    // 中国地图
    initChinaMap() {
      this.chinaEchart = echarts.init(this.$refs.chinaMap);
      let option = {
        tooltip: {
          show: false,
        },
        geo: {
          map: "china",
          roam: false, // 一定要关闭拖拽
          zoom: 1.23,
          center: [105, 36], // 调整地图位置
          label: {
            normal: {
              show: false, //关闭省份名展示
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#01012a",
            },
            emphasis: {
              areaColor: "#184cff",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.23,
            center: [105, 36],
            // geoIndex: 1,
            // aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#0d0059",
                borderColor: "#389dff",
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.chinaEchart.setOption(option);
    },
    // 省级地图
    initProvinceMap() {
      let that = this;
      that.provinceEchart = echarts.init(that.$refs.provinceMap);
      let option = {
        tooltip: {
          show: false,
        },
        geo: {
          map: this.province,
          roam: false,
          // zoom: 1.23,
          label: {
            normal: {
              show: false,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#01012a",
            },
            emphasis: {
              areaColor: "#184cff",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "map",
            map: this.province,
            roam: false,
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                areaColor: "#A5B3CE", //地图区域颜色设置
                borderColor: "#FFFFFF", //边框颜色
                borderWidth: 2, //边框宽度
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      that.provinceEchart.setOption(option);
      // 屏蔽鼠标移入事件
      that.provinceEchart.on("mouseover", function (params) {
        mapChart.dispatchAction({
          type: "downplay",
        });
      });
      // 添加地图区域点击事件
      that.provinceEchart.off("click");
      that.provinceEchart.on("click", function (params) {
      });
      window.onresize = that.provinceEchart.resize;
    },
  },
};
</script>

<style lang="less" scoped>
.mapChart {
  width: 1700px;
  height: 1000px;

  .chinaChart {
    float: left;
    width: 800px;
    height: 800px;
    border: 1px solid #000;
    margin-left: 40px;

    .china-map {
      width: 100%;
      height: 100%;
    }
  }

  .provinceChart {
    float: right;
    width: 800px;
    height: 800px;
    border: 1px solid #000;
    margin-left: 40px;

    .province-map {
      width: 100%;
      height: 100%;
    }
  }
}
</style>