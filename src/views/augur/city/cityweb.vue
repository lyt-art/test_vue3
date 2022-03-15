<template>
  <div class="jcyj">
    <div class="head">
      <div class="title">监测预警</div>
      <div class="right">
        <span>体检年度：</span>
        <div class="date-pick">
          <el-select v-model="value" placeholder="2021">
            <el-option
              v-for="item in date"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <span>体检体系：</span>
        <div class="select">
          <el-select
            v-model="value"
            placeholder="住房和城乡建设部城市体检体系
"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">监测预警</div>
      <div class="box">
        <div class="left">
          <div class="l-title">监测预警</div>
          <div class="l-box">
            <div v-for="(item, index) in leftData" :key="index" class="l-b">
              <div class="l-b-title">{{ item.title }}</div>
              <div class="l-b-box">
                <div
                  v-for="(child, index2) in item.child"
                  :key="index2"
                  class="l-b-box-item"
                >
                  <div class="l-b-box-text">
                    {{ `${child.text}(${child.num})` }}
                  </div>
                </div>
              </div>
              <div class="l-b-line"></div>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="mapChart" ref="mapChart"></div>
        </div>
        <div class="right">
          <div class="r-title">未达标指标</div>
          <div class="r-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [
        {
          value: "选项1",
          label: "2021",
        },
        {
          value: "选项2",
          label: "2022",
        },
      ],
      value: "",
      leftData: [
        {
          title: "不达标指标数31-38",
          child: [
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
          ],
        },
        {
          title: "不达标指标数21-30",
          child: [
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
          ],
        },
        {
          title: "不达标指标数0-20",
          child: [
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
            {
              text: "晋城市",
              num: 33,
            },
          ],
        },
      ],
      options: [1, 2, 3],
    };
  },
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      var echarts = require("echarts");
      let _this = this;
      let chart = _this.$refs.mapChart;
      let mapChart = echarts.init(chart);
      _this.mapChart = mapChart;
      this.mapChart = _this.mapChart;
      let abnormal = [
        { name: "河北省", value: [114.502461, 38.045474, 0] },
        { name: "山西省", value: [111.849248, 36.857014, 0] },
        { name: "内蒙古自治区", value: [111.670801, 41.818311, 0] },
        { name: "辽宁省", value: [123.429096, 41.796767, 0] },
      ];
      let unStandard = [
        { name: "吉林省", value: [125.3245, 43.886841, 0] },
        { name: "黑龙江省", value: [128.642464, 46.756967, 0] },
        { name: "江苏省", value: [119.767413, 33.041544, 0] },
        { name: "浙江省", value: [120.153576, 29.287459, 0] },
        { name: "安徽省", value: [117.283042, 31.26119, 0] },
        { name: "福建省", value: [118.306239, 26.075302, 0] },
      ];
      let standard = [
        { name: "江西省", value: [115.592151, 27.676493, 0] },
        { name: "山东省", value: [118.000923, 36.275807, 1] },
        { name: "河南省", value: [113.665412, 33.757975, 1] },
        { name: "湖北省", value: [113.298572, 30.684355, 1] },
        { name: "湖南省", value: [111.782279, 28.09409, 1] },
        { name: "广东省", value: [113.280637, 23.125178, 1] },
      ];
      this.mapChart.setOption(
        {
          roam: true,
          backgroundColor: "#FFFFFF",
          title: {
            show: false,
            left: 13,
            top: 645,
            zlevel: 1,
            textStyle: {
              color: "#333333",
              fontSize: 14,
            },
          },
          legend: [
            {
              selectedMode: true,
              show: true,
              top: "80%",
              left: "0.6%",
              orient: "vertical",
              backgroundColor: "#EEEEEE",
              borderRadius: [8, 8, 8, 8],
              opacity: 0.2,
              padding: [38, 10, 13, 10],
              textStyle: {
                color: "#333333",
                fontSize: 14,
                fontFamily: "Source Han Sans CN",
                //fontWeight: "bold",
              },
              zlevel: 1,
              width: "auto",
              height: 227,
              itemWidth: 27,
              itemHeight: 15,
              itemGap: 13,
              data: [
                {
                  name: "图例",
                },
                {
                  name: "0-20（不达标数）",
                  icon: "circle",
                },
                {
                  name: "21-30（不达标数）",
                  icon: "circle",
                },
                {
                  name: "31-38（不达标数）",
                  icon: "circle",
                },
              ],
            },
          ],
          geo: [
            {
              map: "china",
              roam: true,
              label: {
                normal: {
                  areacolor: "#A5B3CE",
                  show: false,
                  textStyle: {
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: "10",
                    fontFamily: "Source Han Sans CN",
                  },
                },
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  borderColor: "#FFFFFF",
                  borderWidth: 2,
                  areaColor: "#BDCADA",
                },
              },
            },
          ],
          series: [
            {
              name: "中国",
              type: "map",
              mapType: "china",
              geoIndex: 0,
            },
            {
              name: "0-20（不达标数）",
              type: "effectScatter",
              coordinateSystem: "geo",
              symbol: "circle",
              symbolSize: 14,
              itemStyle: {
                color: "#30bf78",
              },
              icon: "circle",
              geoIndex: 0,
              rippleEffect: {
                brushType: "stroke",
                scale: 3,
                period: 5,
              },
              data: abnormal,
            },
            {
              name: "21-30（不达标数）",
              type: "effectScatter",
              coordinateSystem: "geo",
              symbol: "circle",
              symbolSize: 16,
              itemStyle: {
                color: "#5B8FF9",
                opacity: 1,
              },
              rippleEffect: {
                brushType: "stroke",
                scale: 3,
                period: 5,
              },
              data: unStandard,
            },
            {
              name: "31-38（不达标数）",
              type: "effectScatter",
              coordinateSystem: "geo",
              symbol: "circle",
              symbolSize: 16,
              itemStyle: {
                color: "#FAAD14",
              },
              icon: "circle",
              geoIndex: 0,
              rippleEffect: {
                brushType: "stroke",
                scale: 3,
                period: 5,
              },
              data: standard,
            },
          ],
        },
        true
      );
      this.mapChart.on("mouseover", function (params) {
        mapChart.dispatchAction({
          type: "downplay",
        });
      });
      window.onresize = this.mapChart.resize;
    },
  },
};
</script>

<style lang="less" scoped>
.jcyj {
  position: relative;
  width: 1920px;
  background: #dddddd;
  height: 100vh;

  .head {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 1888px;
    height: 64px;
    line-height: 64px;
    background: #ffffff;
    border-radius: 8px;

    .title {
      float: left;
      width: 80px;
      height: 20px;
      font-size: 20px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
      text-align: left;
      color: #333333;
      margin-left: 18px;
    }

    .right {
      float: right;
      display: flex;

      span {
        display: block;
        width: 100px;
        height: 20px;
        font-size: 20px;
        font-family: Source Han Sans CN, Source Han Sans CN-Bold;
        font-weight: 700;
        text-align: left;
        color: #333333;
      }

      .date-pick {
        width: 149px;
        height: 32px;
        margin-right: 16px;

        .el-input {
          width: 149px;
          height: 32px;
        }
        /deep/ .el-input__inner {
          height: 32px;
          background-color: #eeeeee;
        }
        /deep/ .el-icon-arrow-up {
          color: #000;
        }
      }

      .select {
        width: 360px;
        height: 32px;
        margin-right: 16px;

        .el-select {
          width: 360px;
          height: 32px;
        }
        /deep/ .el-input__inner {
          height: 32px;
          background-color: #eeeeee;
        }
        /deep/ .el-icon-arrow-up {
          color: #000;
        }
      }
    }
  }

  .content {
    position: absolute;
    top: 96px;
    left: 16px;
    width: 1888px;
    height: calc(100vh - 109px);
    background: #ffffff;
    border-radius: 8px;

    .title {
      width: 80px;
      height: 20px;
      font-size: 20px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
      text-align: left;
      color: #333333;
      margin-left: 16px;
      margin-top: 25px;
    }

    .box {
      display: flex;
      height: calc(100vh - 196px);
      margin-top: 19px;

      .left {
        width: 470px;
        background: #ffffff;
        border: 1px solid #999999;
        border-radius: 8px;
        margin-left: 16px;

        .l-title {
          width: 80px;
          height: 20px;
          font-size: 20px;
          font-family: Source Han Sans CN, Source Han Sans CN-Bold;
          font-weight: 700;
          text-align: left;
          color: #333333;
          margin-left: 20px;
          margin-top: 21px;
        }

        .l-box {
          overflow-y: scroll;
          height: calc(100vh - 237px);

          .l-b {
            margin-top: 25px;

            .l-b-title {
              width: 167px;
              height: 18px;
              font-size: 18px;
              font-family: Source Han Sans CN, Source Han Sans CN-Bold;
              font-weight: 700;
              text-align: left;
              color: #333333;
              margin-left: 20px;
            }

            .l-b-box {
              display: flex;
              flex-wrap: wrap;

              .l-b-box-item {
                width: 130px;
                height: 48px;
                line-height: 48px;
                background: rgba(91, 143, 249, 0);
                border: 1px solid #666666;
                border-radius: 8px;
                margin-top: 20px;
                margin-left: 20px;

                .l-b-box-text {
                  width: 88px;
                  height: 20px;
                  font-size: 18px;
                  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
                  font-weight: 500;
                  text-align: center;
                  color: #333333;
                  margin-left: 21px;
                }
              }
            }

            .l-b-line {
              width: 430px;
              border: 1px solid #cccccc;
              margin-left: 16px;
              margin-top: 20px;
            }
          }
        }
      }

      .center {
        width: 880px;
        height: calc(100vh - 196px);
        background: #ffffff;
        border: 1px solid #999999;
        border-radius: 8px;
        margin-left: 20px;

        .mapChart {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        width: 470px;
        background: #ffffff;
        border: 1px solid #999999;
        border-radius: 8px;
        margin-left: 16px;

        .r-title {
          width: 100px;
          height: 20px;
          font-size: 20px;
          font-family: Source Han Sans CN, Source Han Sans CN-Bold;
          font-weight: 700;
          text-align: left;
          color: #333333;
          margin-left: 20px;
          margin-top: 21px;
        }
      }
    }
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 219px;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  width: 4px;
  background-color: rgb(167, 166, 166);
  border-radius: 2px;
}
</style>