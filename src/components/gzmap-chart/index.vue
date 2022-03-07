<template>
  <div class="chart-container">
    <div class="map" id="GZmap"></div>
    <div class="progress">
      <el-progress
        type="circle"
        :percentage="totalnum"
        :stroke-width="10"
        :width="150"
        color="#4F9EFD"
        :format="format"
      ></el-progress>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import GZmap from "@/api/GZmap";
export default {
  data() {
    return {
      GZmapChart: null,
      totalnum: 58,
    };
  },
  mounted() {
    echarts.registerMap("广州", GZmap.guangzhouMap);
    this.drawGZmapChart();
  },
  methods: {
    //   清楚定时器
    drawGZmapChart() {
      let _this = this;
      if (_this.timeOut) {
        clearInterval(_this.timeOut);
      }

      //   定义echarts
      let echarts = this.$echarts;
      this.GZmapChart = echarts.init(document.getElementById("GZmap"));

      //   清除echarts图中存在的点击等操作事件
      this.GZmapChart.clear();
      this.GZmapChart.off("mouseout");
      this.GZmapChart.off("mouseover");

      //   echarts图展示的数据存储
      var gzMapData = [];
      gzMapData = GZmap.guangzhouMap.features.map((item) => {
        return {
          value: (Math.random() * 1000).toFixed(2),
          name: item.properties.name,
        };
      });
      // console.log("橘猫=========================================");
      // console.log(gzMapData);

    //   配置echarts图
      let option = {
        tooltip: {
          backgroundColor: "rgba(0,0,0,0)",
          trigger: "item",
        },
        legend: {
          show: false,
        },
        series: [
          {
            tooltip: {
              show: false,
            },
            name: "广州市数据",
            type: "map",
            map: "广州", // 自定义扩展图表类型
            aspectScale: 1,
            zoom: 0.58, //缩放
            showLegendSymbol: false,
            label: {
              show: true,
              color: "#eff5ff",
              fontSize: "100%",
            },
            itemStyle: {
              areaColor: "#4F7CFD",
              borderColor: "#eff5ff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                show: true,
                color: "#eff5ff",
                fontSize: 16,
              },
              itemStyle: {
                areaColor: "#003DFF",
                borderColor: "#fff",
                borderWidth: 2,
              },
            },
            layoutCenter: ["50%", "50%"],
            layoutSize: "160%",
            markPoint: {
              symbol: "none",
            },
            data: gzMapData,
          },
        ],
      };
      this.GZmapChart.setOption(option);

      //   添加定时器
      let index = 0; //播放时下标的位置
      let play = function () {
        this.GZmapChart.dispatchAction({
          type: "downplay", // 取消高亮
          seriesIndex: 0,
        });
        this.GZmapChart.dispatchAction({
          type: "highlight", // 高亮显示。
          seriesIndex: 0,
          dataIndex: index,
        });
        index++;
      };

      //   自动播放
    //   _this.timeOut = setInterval(play, 3000);

      //   添加鼠标移入事件
    //   this.GZmapChart.getZr().on("mouseover", function (e) {
    //     if (_this.timeOut) {
    //       clearInterval(_this.timeOut);
    //     }
    //     this.GZmapChart.dispatchAction({
    //       type: "downplay",
    //     });
    //     this.GZmapChart.dispatchAction({
    //       type: "highlight",
    //       dataIndex: e.topTarget.dataIndex,
    //     });
    //   });

      //   添加鼠标移出事件
    //   this.GZmapChart.on("mouseout", function () {
    //     _this.timeOut = setInterval(play, 3000);
    //   });
    },
    format(e) {
      e = "";
      return e;
    },
  },
};
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  margin-left: 10px;
}

.map {
  width: 850px;
  height: 800px;
  border: 1px solid #000;
}

.progress {
  position: absolute;
  left: 900px;
  top: 0;
  width: 450px;
  height: 450px;
  margin-top: 30px;
}
</style>

