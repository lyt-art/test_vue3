<template>
  <div class="main">
    <div class="main-l">
      <div class="main-l-t">
        <div class="l-t-header">bjyxszd</div>
        <div class="l-t-t-box">
          <div
            class="ltt-box-item"
            v-for="(item, index) in ltt_box"
            :key="index"
          >
            <div class="ltt-box-item-icon"></div>
            <div class="ltt-box-item-content">
              <div class="ltt-box-item-num">
                {{ item.num }}
                <span class="ltt-box-item-unit">万人</span>
              </div>
              <div class="ltt-box-item-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="l-t-circle"></div>
        <div class="l-t-title">bjyxszd</div>
        <div class="l-t-row">
          <div class="l-t-row-icon"></div>
          <div class="l-t-row-text">bjyxszd</div>
          <div class="l-t-row-num">
            1823
            <span class="l-t-row-unit">万</span>
          </div>
        </div>
        <div class="l-t-b-box">
          <div
            class="ltb-box-item"
            v-for="(item, index) in ltb_box"
            :key="index"
          >
            <div class="ltb-box-item-num">
              {{ item.num }}
              <span class="ltb-box-item-unit">万</span>
            </div>
            <div class="ltb-box-item-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="main-l-b">
        <div class="l-b-title">zswwszd</div>
        <div class="l-b-row">
          <div class="l-b-row-l">
            <div class="lb-row-l-l">wyb</div>
            <div class="lb-row-l-r">xz</div>
          </div>
          <div class="l-b-row-c">
            <div class="lb-row-r-text">zswwszd：</div>
            <div class="lb-row-r-num">
              1823<span class="lb-row-r-unit">人</span>
            </div>
          </div>
          <div class="l-b-row-r"></div>
        </div>
        <div class="l-b-echart">
          <div class="lb-echart" ref="lb_echart"></div>
        </div>
      </div>
    </div>
    <div class="main-r">
      <div class="main-r-t">
        <div class="r-t-header">
          <div
            class="r-t-header-l"
            :class="{ 'rt-header-l': show_rtbox == 'rtbox_one' }"
            @click="showRTbox('rtbox_one')"
          >
            bjyxszd
          </div>
          <div
            class="r-t-header-r"
            :class="{ 'rt-header-r': show_rtbox == 'rtbox_two' }"
            @click="showRTbox('rtbox_two')"
          >
            zswwszd
          </div>
        </div>
        <div class="r-t-one" v-if="show_rtbox == 'rtbox_one'">
          <div class="rt-one-l">
            <!-- @mouseenter="this.stopPlay()"
            @mouseleave="this.autoPlay1()" -->.
            <div
              class="rt-one-l-item"
              v-for="(item, index) in rt_one_l"
              :key="index"
              @click="gotoRtOneLItem(index + 1)"
            >
              <div
                :class="{
                  'rt-one-l-item1': rtOneL_item == 'rtOneL_item1',
                  'rt-one-l-item2': rtOneL_item == 'rtOneL_item2',
                  'rt-one-l-item3': rtOneL_item == 'rtOneL_item3',
                  'rt-one-l-item4': rtOneL_item == 'rtOneL_item4',
                  'rt-one-l-item5': rtOneL_item == 'rtOneL_item5',
                  'rt-one-l-item6': rtOneL_item == 'rtOneL_item6'
                }"
              >
                {{ item.name }}
              </div>
            </div>
            <!-- <div
              class="rt-one-l-item"
              :class="{ 'rt-one-l-item1': rtOneL_item == 'rtOneL_item1' }"
              @click="gotoRtOneLItem(1)"
            ></div>
            <div
              class="rt-one-l-item"
              :class="{ 'rt-one-l-item2': rtOneL_item == 'rtOneL_item2' }"
              @click="gotoRtOneLItem(2)"
            ></div>
            <div
              class="rt-one-l-item"
              :class="{ 'rt-one-l-item3': rtOneL_item == 'rtOneL_item3' }"
              @click="gotoRtOneLItem(3)"
            ></div>
            <div
              class="rt-one-l-item"
              :class="{ 'rt-one-l-item4': rtOneL_item == 'rtOneL_item4' }"
              @click="gotoRtOneLItem(4)"
            ></div>
            <div
              class="rt-one-l-item"
              :class="{ 'rt-one-l-item5': rtOneL_item == 'rtOneL_item5' }"
              @click="gotoRtOneLItem(5)"
            ></div>
            <div
              class="rt-one-l-item"
              :class="{ 'rt-one-l-item6': rtOneL_item == 'rtOneL_item6' }"
              @click="gotoRtOneLItem(6)"
            ></div> -->
            <div class="rt-one-l-circle"></div>
          </div>
          <div class="rt-one-r">
            <div class="rt-one-r-t">
              <div class="rt-one-rt-title">
                {{ this.rt_one_l[this.rtOneL_item_num - 1].text || "" }}
              </div>
            </div>
            <div class="rt-one-r-l">
              <div
                class="re-one-rl-text"
                :class="{
                  're-one-rl-text1': this.rtOneL_item_num == 1,
                  're-one-rl-text2': this.rtOneL_item_num == 2,
                  're-one-rl-text3': this.rtOneL_item_num == 3,
                  're-one-rl-text4': this.rtOneL_item_num == 4,
                  're-one-rl-text5': this.rtOneL_item_num == 5,
                  're-one-rl-text6': this.rtOneL_item_num == 6
                }"
              >
                {{ this.rt_one_l[this.rtOneL_item_num - 1].text || "" }}
              </div>
            </div>
            <div class="rt-one-r-r"></div>
          </div>
        </div>
        <div class="r-t-two" v-if="show_rtbox == 'rtbox_two'">
          <div class="rt-two-l">
            <div
              class="rt-two-l-item"
              :class="{ 'rt-two-l-item1': rtTwoL_item == 'rtTwoL_item1' }"
            ></div>
            <div
              class="rt-two-l-item"
              :class="{ 'rt-two-l-item2': rtTwoL_item == 'rtTwoL_item2' }"
            ></div>
            <div
              class="rt-two-l-item"
              :class="{ 'rt-two-l-item3': rtTwoL_item == 'rtTwoL_item3' }"
            ></div>
            <div
              class="rt-two-l-item"
              :class="{ 'rt-two-l-item4': rtTwoL_item == 'rtTwoL_item4' }"
            ></div>
            <div
              class="rt-two-l-item"
              :class="{ 'rt-two-l-item5': rtTwoL_item == 'rtTwoL_item5' }"
            ></div>
          </div>
          <div class="rt-two-r"></div>
        </div>
      </div>
      <div class="main-r-b">
        <div class="r-b-l">
          <div class="rbl-title">bjyxszd</div>
          <div class="rbl-box">
            <div
              class="rbl-box-item"
              v-for="(item, index) in rbl_box"
              :key="index"
            >
              <div class="rbl-box-item-num">
                {{ item.num }}
                <span class="rbl-box-item-unit">人</span>
              </div>
              <div class="rbl-box-item-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="r-b-r">
          <div class="rbr-box">
            <div
              class="rbr-box-item"
              v-for="(item, index) in rbr_box"
              :key="index"
              @mouseenter="gotoRbrPopup(index + 1)"
            >
              <div class="rbr-box-item-pic"></div>
              {{ item.text }}
              <div class="rbr-box-item-icon"></div>
            </div>
          </div>
          <div
            class="rbr-popup"
            :class="{ 'rbr-popup1': rbr_popup == 'rbr_popup1' }"
            v-if="rbr_popup == 'rbr_popup1'"
          >
            <div class="rbr-popup1-head">
              <div class="rbr-popup1-title">bjyxszd</div>
              <div class="rbr-popup1-close"><i class="el-icon-close" /></div>
            </div>
            <div class="rbr-popup1-box">
              <div class="rbr-popup1-echart" ref="rbr_popup1_echart"></div>
            </div>
          </div>
          <div
            class="rbr-popup"
            :class="{ 'rbr-popup2': rbr_popup == 'rbr_popup2' }"
            v-if="rbr_popup == 'rbr_popup2'"
          >
            <div class="rbr-popup2-head">
              <div class="rbr-popup2-title">bjyxszd</div>
              <div class="rbr-popup2-close"><i class="el-icon-close" /></div>
            </div>
            <div class="rbr-popup2-box">
              <div class="rbr-popup2-title">
                bjyxszd：<span class="rbr-popup2-num">1823</span
                >万人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; zswwszd：<span
                  class="rbr-popup2-num"
                  >1823</span
                >万人
              </div>
              <div class="rbr-popup2-text">zswwszd</div>
              <div class="rbr-popup2-list">
                <div
                  class="rbr-popup2-li"
                  v-for="(item, index) in rbr_popup2_list"
                  :key="index"
                >
                  <div class="rbr-popup2-li-text">{{ item.text }}</div>
                  <div class="rbr-popup2-li-per">{{ item.num }}%</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="rbr-popup"
            :class="{ 'rbr-popup3': rbr_popup == 'rbr_popup3' }"
            v-if="rbr_popup == 'rbr_popup3'"
          >
            <div class="rbr-popup3-head">
              <div class="rbr-popup3-title">bjyxszd</div>
              <div class="rbr-popup3-close"><i class="el-icon-close" /></div>
            </div>
            <div class="rbr-popup3-list-title">
              <div class="rbr-popup3-list-title1">xz</div>
              <div class="rbr-popup3-list-title2">wyb</div>
              <div class="rbr-popup3-list-title3">zjl</div>
            </div>
            <div class="rbr-popup3-list">
              <div
                class="rbr-popup3-li"
                v-for="(item, index) in rbr_popup3_list"
                :key="index"
              >
                <div class="rbr-popup3-li-text">{{ item.text }}</div>
                <div class="rbr-popup3-li-num">{{ item.num }}人</div>
                <div class="rbr-popup3-li-per">{{ item.per }}%</div>
              </div>
            </div>
          </div>
          <div
            class="rbr-popup"
            :class="{ 'rbr-popup4': rbr_popup == 'rbr_popup4' }"
            v-if="rbr_popup == 'rbr_popup4'"
          ></div>
          <div
            class="rbr-popup"
            :class="{ 'rbr-popup5': rbr_popup == 'rbr_popup5' }"
            v-if="rbr_popup == 'rbr_popup5'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ltt_box: [
        { bgc: "111", num: 1823, text: "bjyxszd" },
        { bgc: "111", num: 1823, text: "bjyxszd" },
        { bgc: "111", num: 1823, text: "bjyxszd" },
        { bgc: "111", num: 1823, text: "bjyxszd" }
      ],
      ltb_box: [
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" }
      ],
      show_rtbox: "rtbox_one", // 人口画像按钮
      rtOneL_item: "rtOneL_item1", // 环形图item跳转
      rtOneL_item_num: 1, // 记录跳转item的序号
      myInterval1: null, // 环形自动跳转定时器
      rt_one_l: [
        //环形图数据
        { name: "xz", text: "xzbjyxszd" },
        { name: "wyb", text: "wybbjyxszd" },
        { name: "zjl", text: "zjlbjyxszd" },
        { name: "mht", text: "mhtbjyxszd" },
        { name: "ldx", text: "ldxbjyxszd" },
        { name: "cap", text: "capbjyxszd" }
      ],
      rtTwoL_item: "rtTwoL_item1", // 热点图item跳转
      rtTwoL_item_num: 1, // 记录跳转item的序号
      myInterval2: null, // 热点图自动跳转定时器
      rbl_box: [
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" },
        { num: 1823, text: "bjyxszd" }
      ],
      rbr_box: [
        { pic: "", text: "bjyxszd" },
        { pic: "", text: "bjyxszd" },
        { pic: "", text: "bjyxszd" },
        { pic: "", text: "bjyxszd" },
        { pic: "", text: "bjyxszd" }
      ],
      rbr_popup: "rbr_popup1", // 弹窗跳转
      rbr_popup_num: 1, // 弹窗序号
      rbr_popup2_list: [
        { num: 23, text: "wyb" },
        { num: 18, text: "xz" },
        { num: 23, text: "wyb" },
        { num: 85, text: "xz" },
        { num: 95, text: "wyb" },
        { num: 33, text: "xz" }
      ],
      rbr_popup3_list: [
        { num: 1823, per: 18, text: "wyb" },
        { num: 1823, per: 18, text: "xz" },
        { num: 1823, per: 18, text: "wyb" },
        { num: 1823, per: 18, text: "xz" },
        { num: 1823, per: 18, text: "wyb" },
        { num: 1823, per: 18, text: "xz" },
        { num: 1823, per: 18, text: "wyb" },
        { num: 1823, per: 18, text: "xz" },
        { num: 1823, per: 18, text: "wyb" },
        { num: 1823, per: 18, text: "xz" }
      ]
    };
  },
  mounted() {
    this.autoPlay1();
    this.autoPlay2();
    this.drawLBEchart();
    this.drawRBRPopup1Echart();
  },
  methods: {
    showRTbox(params) {
      this.show_rtbox = params;
    },
    gotoRtOneLItem(num) {
      // 环形图变化
      clearInterval(this.myInterval1);
      this.rtOneL_item_num = num;
      this.rtOneL_item = `rtOneL_item${this.rtOneL_item_num}`;
    },
    autoPlay1() {
      // 环形图
      this.myInterval1 = setInterval(() => {
        this.rtOneL_item_num += 1;
        if (this.rtOneL_item_num == 7) {
          this.rtOneL_item_num = 1;
        }
        this.rtOneL_item = `rtOneL_item${this.rtOneL_item_num}`;
      }, 3000);
    },
    stopPlay() {
      clearInterval(this.myInterval1);
    },
    autoPlay2() {
      // 热点图
      this.myInterval2 = setInterval(() => {
        this.rtTwoL_item_num += 1;
        if (this.rtTwoL_item_num == 6) {
          this.rtTwoL_item_num = 1;
        }
        this.rtTwoL_item = `rtTwoL_item${this.rtTwoL_item_num}`;
      }, 3000);
    },
    gotoRbrPopup(num) {
      // 弹窗变化
      this.rbr_popup_num = num;
      this.rbr_popup = `rbr_popup${this.rbr_popup_num}`;
    },
    drawLBEchart() {
      let myChart = this.$echarts.init(this.$refs.lb_echart);
      var category = [
        {
          name: "xz",
          value: 25
        },
        {
          name: "wyb",
          value: 80
        },
        {
          name: "zjl",
          value: 30
        },
        {
          name: "mht",
          value: 30
        },
        {
          name: "ldx",
          value: 30
        }
      ]; // 类别
      var sum = 0;
      category.forEach(ele => {
        sum += ele.value;
      });

      var total = 100; // 数据总数
      var datas = [];
      category.forEach(value => {
        datas.push(value.value);
      });
      let option = {
        xAxis: {
          max: total,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 80,
          top: 20, // 设置条形图的边距
          right: 80,
          bottom: 20
        },
        yAxis: [
          {
            type: "category",
            inverse: false,
            data: category,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        series: [
          {
            // 内
            type: "bar",
            barWidth: 18,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
              normal: {
                color: function() {
                  var color;
                  color = {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#4f9efd" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#0F4071" // 100% 处的颜色
                      }
                    ]
                  };
                  return color;
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "left",
                formatter: "{b}",
                textStyle: {
                  color: "#fff",
                  fontSize: 20
                }
              }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#061348"
              }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [1, 21],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: category,
            z: 2,
            animationEasing: "elasticOut"
          },
          {
            // 外边框
            type: "pictorialBar",
            symbol: "rect",
            symbolBoundingData: total,
            itemStyle: {
              normal: {
                color: "none"
              }
            },
            label: {
              normal: {
                formatter: params => {
                  var text;
                  // var pro = Math.floor((params.data / sum) * 100) + "%";
                  // text = "{a|  " + pro + "}{b|  " + params.data + "}";
                  text = "{b|  " + params.data + "}{c| " + "人" + "}";
                  return text;
                },
                rich: {
                  a: {
                    color: "#ffffff"
                  },
                  b: {
                    color: "#4f9efd"
                  },
                  c: {
                    color: "#fff"
                  }
                },
                position: "right",
                distance: 0, // 向右偏移位置
                show: true
              }
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
          },
          {
            name: "外框",
            type: "bar",
            barGap: "-120%", // 设置外框粗细
            data: [
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total
            ],
            barWidth: 25,
            itemStyle: {
              normal: {
                color: "transparent", // 填充色
                barBorderColor: "#1C4B8E", // 边框色
                barBorderWidth: 1, // 边框宽度
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: "top" // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 0
          }
        ]
      };
      myChart.setOption(option);
    },
    drawRBRPopup1Echart() {
      let myChart1 = this.$echarts.init(this.$refs.rbr_popup1_echart);
      let option = {
        baseOption: {
          timeline: {
            show: false
          },
          color: ["#f14f75", "#2c7efa"],
          title: {
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          legend: {
            data: ["女性", "男性"],
            top: 8,
            right: 20,
            icon: "circle",
            itemHeight: 20,
            textStyle: {
              color: "#fff",
              fontSize: 20
            }
          },
          tooltip: {
            show: true,
            trigger: "axis",
            //formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
              type: "shadow"
            }
          },
          grid: [
            {
              show: false,
              left: "-20%",
              top: 60,
              bottom: 60,
              containLabel: true,
              width: "60%"
            },
            {
              show: false,
              left: "50.5%",
              top: 60,
              bottom: 60,
              width: "10%"
            },
            {
              show: false,
              right: "-20%",
              top: 60,
              bottom: 60,
              containLabel: true,
              width: "60%"
            }
          ],
          xAxis: [
            {
              max: function(value) {
                return value.max * 2 - 20;
              },
              type: "value",
              triggerEvent: true,
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: "top",
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              max: function(value) {
                return value.max * 2 - 20;
              },
              gridIndex: 2,
              type: "value",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: "top",
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: "category",
              inverse: true,
              position: "right",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                  color: "#fff",
                  fontSize: 20
                }
              },
              data: [
                "80岁+",
                "70-80岁",
                "60-70岁",
                "45-60岁",
                "30-45岁",
                "18-30岁",
                "0-18岁"
              ]
            },
            {
              gridIndex: 1,
              type: "category",
              inverse: true,
              position: "left",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#ffffff",
                  fontSize: 20
                }
              },
              data: [
                "80岁+",
                "70-80岁",
                "60-70岁",
                "45-60岁",
                "30-45岁",
                "18-30岁",
                "0-18岁"
              ].map(function(value) {
                return {
                  value: value,
                  textStyle: {
                    align: "center"
                  }
                };
              })
            },
            {
              gridIndex: 2,
              type: "category",
              inverse: true,
              position: "left",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: [
                "80岁+",
                "70-80岁",
                "60-70岁",
                "45-60岁",
                "30-45岁",
                "18-30岁",
                "0-18岁"
              ]
            }
          ],
          series: [
            {
              name: "女性",
              type: "bar",
              stack: "one",
              barGap: 15,
              barWidth: 30,
              label: {
                normal: {
                  show: true,
                  position: "right",
                  offset: [-50, 0],
                  textStyle: {
                    color: "#fff",
                    fontSize: 20
                  }
                },
                emphasis: {
                  show: true,
                  position: "left",
                  offset: [0, 0],
                  textStyle: {
                    color: "#fff",
                    fontSize: 14
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: "#f14f75",
                  opacity: 1,
                  barBorderRadius: [10, 0, 0, 10]
                },
                emphasis: {
                  opacity: 1
                }
              },
              data: [389, 259, 262, 324, 232, 176, 196]
            },
            {
              name: "男性",
              stack: "right",
              type: "bar",
              barGap: 15,
              barWidth: 30,
              xAxisIndex: 2,
              yAxisIndex: 2,
              label: {
                normal: {
                  show: true,
                  position: "left",
                  offset: [50, 0],
                  textStyle: {
                    color: "#fff",
                    fontSize: 20
                  }
                },
                emphasis: {
                  show: true,
                  position: "right",
                  offset: [0, 0],
                  textStyle: {
                    color: "#fff",
                    fontSize: 14
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: "#2c7efa",
                  opacity: 1,
                  barBorderRadius: [0, 10, 10, 0]
                },
                emphasis: {
                  opacity: 1
                }
              },
              data: [389, 259, 262, 324, 232, 176, 196]
            }
          ]
        }
      };
      myChart1.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  position: relative;
  height: 900px;
  color: #fff;

  .main-l {
    position: absolute;
    left: 0;
    width: 728px;
    height: 100%;

    .main-l-t {
      width: 100%;
      height: 515px;
      background: url("../../../../assets/csjcys/rkgk.png");
      background-size: 100% 100%;

      .l-t-header {
        height: 55px;
        padding-top: 5px;
        text-align: center;
        font-size: 32px;
      }

      .l-t-t-box {
        display: flex;
        flex-wrap: wrap;
        width: 650px;
        height: 200px;
        margin-top: 20px;
        margin-left: 50px;

        .ltt-box-item {
          display: flex;
          width: 325px;
          height: 100px;
          background: linear-gradient(
            90deg,
            rgba(37, 101, 204, 0.7) 10%,
            rgba(37, 101, 204, 0.03) 100%
          );

          .ltt-box-item-icon {
            width: 40px;
            height: 38px;
            margin-top: 30px;
            margin-left: 43px;
            background: url("../../../../assets/csjcys/tb1.png");
            background-size: 100% 100%;
          }

          .ltt-box-item-content {
            margin-left: 10px;
            margin-top: 20px;

            .ltt-box-item-num {
              font-size: 25px;

              .ltt-box-item-unit {
                font-size: 20px;
              }
            }

            .ltt-box-item-text {
              font-size: 20px;
            }
          }
        }
        .ltt-box-item:nth-child(2) {
          background: linear-gradient(
            260deg,
            rgba(58, 148, 255, 0.7) 0%,
            rgba(58, 148, 255, 0.03) 100%
          );

          .ltt-box-item-icon {
            margin-left: 105px;
            background: url("../../../../assets/csjcys/hj.png");
            background-size: 100% 100%;
          }
        }
        .ltt-box-item:nth-child(3) {
          background: linear-gradient(
            90deg,
            rgba(255, 145, 63, 0.7) 0%,
            rgba(255, 145, 63, 0.03) 100%
          );

          .ltt-box-item-icon {
            background: url("../../../../assets/csjcys/ld.png");
            background-size: 100% 100%;
          }
        }
        .ltt-box-item:nth-child(4) {
          background: linear-gradient(
            248deg,
            rgba(0, 184, 122, 0.7) 0%,
            rgba(0, 184, 122, 0.03) 100%
          );

          .ltt-box-item-icon {
            margin-left: 105px;
            background: url("../../../../assets/csjcys/jw.png");
            background-size: 100% 100%;
          }
        }
      }

      .l-t-circle {
        position: absolute;
        left: 292px;
        top: 100px;
        width: 165px;
        height: 165px;
        background: url("../../../../assets/csjcys/yq.png");
        background-size: 100% 100%;
      }

      .l-t-title {
        height: 35px;
        margin-top: 30px;
        padding-left: 45px;
        border-left: 5px solid #4f9efd;
        line-height: 35px;
        font-size: 32px;
      }

      .l-t-row {
        display: flex;
        width: 650px;
        height: 45px;
        line-height: 45px;
        background-color: #0054b6;
        margin-left: 50px;
        margin-top: 10px;

        .l-t-row-icon {
          width: 27px;
          height: 21px;
          margin-left: 30px;
          margin-top: 10px;
          background: url("../../../../assets/csjcys/zl.png");
          background-size: 100% 100%;
        }

        .l-t-row-text {
          font-size: 24px;
          margin-left: 10px;
        }

        .l-t-row-num {
          font-size: 25px;
          margin-left: 283px;

          .l-t-row-unit {
            font-size: 20px;
          }
        }
      }

      .l-t-b-box {
        display: flex;
        width: 650px;
        height: 83px;
        margin-top: 10px;
        margin-left: 50px;

        .ltb-box-item {
          width: 210px;
          height: 83px;
          text-align: center;
          background: url("../../../../assets/csjcys/rkzl.png");
          background-size: 100% 100%;

          .ltb-box-item-num {
            height: 47px;
            line-height: 47px;
            font-size: 25px;

            .ltb-box-item-unit {
              font-size: 20px;
            }
          }

          .ltb-box-item-text {
            font-size: 20px;
          }
        }
        .ltb-box-item:nth-child(2) {
          margin: 0 10px 0 10px;
        }
      }
    }

    .main-l-b {
      width: 100%;
      height: 321px;
      margin-top: 20px;
      padding-top: 30px;
      background: url("../../../../assets/csjcys/wgfb-down.png");
      background-size: 100% 100%;

      .l-b-title {
        height: 35px;
        font-size: 32px;
        line-height: 35px;
        border-left: 5px solid #4f9efd;
        padding-left: 45px;
      }

      .l-b-row {
        display: flex;
        width: 682px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        margin-left: 50px;
        margin-top: 5px;

        .l-b-row-l {
          display: flex;
          width: 156px;
          height: 38px;

          .lb-row-l-l,
          .lb-row-l-r {
            width: 75px;
            height: 35px;
            font-size: 20px;
            border: 1px solid #4f9efd;
          }
        }

        .l-b-row-c {
          display: flex;
          margin-left: 198px;

          .lb-row-r-text {
            font-size: 20px;
          }

          .lb-row-r-num {
            font-size: 20px;
          }
        }

        .l-b-row-r {
          width: 60px;
          height: 60px;
          background: url("../../../../assets/csjcys/geo.png");
          background-size: 100% 100%;
          margin-top: -8px;
          margin-left: 62px;
        }
      }

      .l-b-echart {
        width: 628px;
        height: 225px;
        margin: 0 46px;

        .lb-echart {
          width: 628px;
          height: 225px;
        }
      }
    }
  }

  .main-r {
    position: absolute;
    right: 0;
    width: 1313px;
    height: 100%;

    .main-r-t {
      width: 100%;
      height: 515px;
      background: url("../../../../assets/csjcys/rktx.png");
      background-size: 100% 100%;

      .r-t-header {
        display: flex;
        padding-top: 15px;
        padding-left: 45px;
        font-size: 32px;
        text-align: center;
        line-height: 35px;
        border-left: 5px solid #4f9efd;
        cursor: pointer;

        .r-t-header-l {
          width: 208px;
          height: 50px;
        }
        .rt-header-l {
          color: #409eff;
          background: url("../../../../assets/csjcys/rkbh.png");
          background-size: 100% 100%;
        }

        .r-t-header-r {
          width: 208px;
          height: 50px;
          margin-left: 20px;
        }
        .rt-header-r {
          color: #409eff;
          background: url("../../../../assets/csjcys/rkbh.png");
          background-size: 100% 100%;
        }
      }

      .r-t-one {
        position: relative;
        width: 1313px;
        height: 400px;
        margin-top: 15px;

        .rt-one-l {
          position: absolute;
          left: 0;
          width: 390px;
          height: 385px;

          .rt-one-l-circle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 147px;
            height: 147px;
            background: url("../../../../assets/csjcys/xmy.png");
            background-size: 100% 100%;
          }

          .rt-one-l-item {
            position: absolute;
            width: 141px;
            height: 128px;
            text-align: center;
            line-height: 128px;
            //     border: 1px solid pink;
            background: url("../../../../assets/csjcys/sector1.png");
            background-size: 100% 100%;
            cursor: pointer;
          }
          .rt-one-l-item:nth-child(1) {
            top: 6.5%;
            left: 50.5%;
            transform: rotate(-1deg);

            .rt-one-l-item1 {
              width: 139px;
              height: 126px;
              background: url("../../../../assets/csjcys/fill.png");
            }
          }

          .rt-one-l-item:nth-child(2) {
            top: 35.7%;
            left: 64%;
            transform: rotate(59deg);

            .rt-one-l-item2 {
              position: absolute;
              width: 102px;
              height: 162px;
              top: -11.5%;
              left: 3%;
              transform: rotate(-59.5deg) !important;
              background: url("../../../../assets/csjcys/fill2.png");
            }
          }

          .rt-one-l-item:nth-child(3) {
            top: 62.5%;
            left: 46%;
            transform: rotate(119deg);

            .rt-one-l-item3 {
              position: absolute;
              width: 139px;
              height: 126px;
              top: -7.5%;
              left: -13.8%;
              transform: rotate(240deg) !important;
              background: url("../../../../assets/csjcys/fill3.png");
            }
          }

          .rt-one-l-item:nth-child(4) {
            top: 60.2%;
            left: 14%;
            transform: rotate(178deg);

            .rt-one-l-item4 {
              position: absolute;
              top: 1.5%;
              left: 0%;
              width: 139px;
              height: 126px;
              transform: rotate(181deg) !important;
              background: url("../../../../assets/csjcys/fill4.png");
            }
          }

          .rt-one-l-item:nth-child(5) {
            top: 31%;
            left: -0.4%;
            transform: rotate(239deg);

            .rt-one-l-item5 {
              position: absolute;
              width: 102px;
              height: 162px;
              top: -11%;
              left: 3.5%;
              transform: rotate(120deg) !important;
              background: url("../../../../assets/csjcys/fill5.png");
            }
          }

          .rt-one-l-item:nth-child(6) {
            top: 4%;
            left: 18%;
            transform: rotate(299deg);

            .rt-one-l-item6 {
              position: absolute;
              top: -7.7%;
              left: -11.2%;
              width: 139px;
              height: 126px;
              transform: rotate(61deg) !important;
              background: url("../../../../assets/csjcys/fill7.png");
            }
          }
        }

        .rt-one-r {
          position: absolute;
          right: 0;
          width: 890px;
          height: 390px;

          .rt-one-r-t {
            width: 890px;
            height: 50px;
            background-color: #0054b6;

            .rt-one-rt-title {
              height: 50px;
              line-height: 50px;
              font-size: 32px;
              margin-left: 25px;
            }
          }

          .rt-one-r-l {
            position: absolute;
            top: 50px;
            left: 0;
            width: 300px;
            height: 345px;
            padding-top: 5px;
            background-color: #020f2b;

            .re-one-rl-text {
              width: 251px;
              height: 55px;
              line-height: 55px;
              font-size: 20px;
              margin-left: 20px;
              padding-left: 20px;
            }
            .re-one-rl-text1 {
              background-color: #e27f34;
            }
            .re-one-rl-text2 {
              background-color: #00b87a;
            }
            .re-one-rl-text3 {
              background-color: #02b7b7;
            }
            .re-one-rl-text4 {
              background-color: #3a7eff;
            }
            .re-one-rl-text5 {
              background-color: #4b32c2;
            }
            .re-one-rl-text6 {
              background-color: #7432c2;
            }
          }

          .rt-one-r-r {
            position: absolute;
            top: 50px;
            right: 0;
            width: 590px;
            height: 350px;
            background-color: #020f2b;
          }
        }
      }

      .r-t-two {
        position: relative;
        width: 1313px;
        height: 400px;
        margin-top: 15px;

        .rt-two-l {
          position: absolute;
          left: 0;
          width: 390px;
          height: 385px;
          background: url("../../../../assets/csjcys/fg.png");
          background-size: 100% 100%;

          .rt-two-l-item:nth-child(1) {
            position: absolute;
            top: 240px;
            left: 153px;
            height: 97px;
            width: 97px;
            background: url("../../../../assets/csjcys/ball55.png");
            background-size: 100% 100%;
          }
          .rt-two-l-item1 {
            background: url("../../../../assets/csjcys/ball5.png") !important;
          }
          .rt-two-l-item:nth-child(2) {
            position: absolute;
            top: 198px;
            left: 100px;
            height: 64px;
            width: 64px;
            background: url("../../../../assets/csjcys/ball44.png");
            background-size: 100% 100%;
          }
          .rt-two-l-item2 {
            background: url("../../../../assets/csjcys/ball4.png") !important;
          }
          .rt-two-l-item:nth-child(3) {
            position: absolute;
            top: 73px;
            left: 74px;
            height: 102px;
            width: 102px;
            background: url("../../../../assets/csjcys/ball33.png");
            background-size: 100% 100%;
          }
          .rt-two-l-item3 {
            background: url("../../../../assets/csjcys/ball3.png") !important;
          }
          .rt-two-l-item:nth-child(4) {
            position: absolute;
            top: 52px;
            left: 186px;
            height: 85px;
            width: 85px;
            background: url("../../../../assets/csjcys/ball22.png");
            background-size: 100% 100%;
          }
          .rt-two-l-item4 {
            background: url("../../../../assets/csjcys/ball2.png") !important;
          }
          .rt-two-l-item:nth-child(5) {
            position: absolute;
            top: 140px;
            left: 233px;
            height: 115px;
            width: 115px;
            background: url("../../../../assets/csjcys/ball11.png");
            background-size: 100% 100%;
          }
          .rt-two-l-item5 {
            background: url("../../../../assets/csjcys/ball1.png") !important;
          }
        }
      }
    }

    .main-r-b {
      position: relative;
      width: 100%;
      height: 351px;
      margin-top: 20px;

      .r-b-l {
        position: absolute;
        left: 0;
        width: 648px;
        height: 351px;
        background: url("../../../../assets/csjcys/wgfb-down.png");
        background-size: 100% 100%;

        .rbl-title {
          width: 648px;
          height: 35px;
          margin-top: 30px;
          padding-left: 35px;
          line-height: 35px;
          border-left: 5px solid #4f9efd;
          font-size: 32px;
        }

        .rbl-box {
          display: flex;
          flex-wrap: wrap;
          width: 582px;
          height: 270px;
          margin-top: 10px;
          margin-left: 30px;

          .rbl-box-item {
            width: 281px;
            height: 80px;
            background: url("../../../../assets/csjcys/rkzl.png");
            background-size: 100% 100%;
            margin-bottom: 10px;
            margin-right: 10px;

            .rbl-box-item-num {
              height: 47px;
              line-height: 47px;
              font-size: 35px;
              text-align: center;
              color: #4f9efd;

              .rbl-box-item-unit {
                font-size: 20px;
              }
            }

            .rbl-box-item-text {
              height: 30px;
              line-height: 25px;
              text-align: center;
              font-size: 20px;
            }
          }
        }
      }

      .r-b-r {
        position: absolute;
        right: 0;
        width: 645px;
        height: 351px;
        background: url("../../../../assets/csjcys/wgfb-down.png");
        background-size: 100% 100%;

        .rbr-box {
          width: 57px;
          width: 311px;
          margin-top: 20px;
          margin-left: 35px;

          .rbr-box-item {
            display: flex;
            width: 574px;
            height: 59px;
            line-height: 59px;
            text-align: center;
            font-size: 24px;
            justify-content: space-between;
            margin-bottom: 4px;
            background: linear-gradient(
              90deg,
              rgba(255, 145, 63, 0.6) 20%,
              rgba(255, 145, 63, 0.1) 100%
            );

            .rbr-box-item-pic {
              width: 30px;
              height: 30px;
              background: url("../../../../assets/csjcys/nn.png");
              background-size: 100% 100%;
              margin: 15px;
            }
          }
          .rbr-box-item:nth-child(2) {
            background: linear-gradient(
              90deg,
              rgba(255, 221, 119, 0.6) 20%,
              rgba(255, 221, 119, 0.1) 100%
            );

            .rbr-box-item-pic {
              background: url("../../../../assets/csjcys/zz.png");
              background-size: 100% 100%;
            }
          }
          .rbr-box-item:nth-child(3) {
            background: linear-gradient(
              90deg,
              rgba(0, 234, 156, 0.6) 20%,
              rgba(0, 234, 156, 0.1) 100%
            );

            .rbr-box-item-pic {
              background: url("../../../../assets/csjcys/wh.png");
              background-size: 100% 100%;
            }
          }
          .rbr-box-item:nth-child(4) {
            background: linear-gradient(
              90deg,
              rgba(0, 233, 234, 0.6) 20%,
              rgba(0, 233, 234, 0.1) 100%
            );

            .rbr-box-item-pic {
              background: url("../../../../assets/csjcys/sr.png");
              background-size: 100% 100%;
            }
          }
          .rbr-box-item:nth-child(5) {
            background: linear-gradient(
              90deg,
              rgba(79, 158, 253, 0.6) 20%,
              rgba(79, 158, 253, 0.1) 100%
            );

            .rbr-box-item-pic {
              background: url("../../../../assets/csjcys/hy.png");
              background-size: 100% 100%;
            }
          }

          .rbr-box-item-icon {
            width: 11px;
            height: 18px;
            background: url("../../../../assets/csjcys/jt.png");
            background-size: 100% 100%;
            margin-top: 24px;
            margin-right: 51px;
            cursor: pointer;
          }
        }

        .rbr-popup {
          position: absolute;
          top: -95px;
          left: 650px;
          width: 638px;
          height: 452px;
        }
        .rbr-popup1 {
          background: url("../../../../assets/csjcys/popjy.png");
          background-size: 100% 100%;

          .rbr-popup1-head {
            position: relative;
            width: 568px;
            height: 50px;
            margin: 25px 25px 0px 45px;
            background-color: #0054b6;

            .rbr-popup1-title {
              position: absolute;
              left: 20px;
              height: 50px;
              line-height: 50px;
              font-size: 25px;
            }

            .rbr-popup1-close {
              position: absolute;
              right: 0;
              width: 35px;
              height: 36px;
              padding: 7px;
              background-color: rgba(6, 43, 92, 0.8);
              cursor: pointer;

              i {
                font-size: 35px;
              }
            }
          }

          .rbr-popup1-box {
            width: 568px;
            height: 360px;
            margin: 0px 25px 25px 45px;
            background-color: rgba(2, 15, 43, 0.8);

            .rbr-popup1-echart {
              width: 568px;
              height: 360px;
            }
          }
        }
        .rbr-popup2 {
          background: url("../../../../assets/csjcys/popjy2.png");
          background-size: 100% 100%;

          .rbr-popup2-head {
            position: relative;
            width: 568px;
            height: 50px;
            margin: 25px 25px 0px 47px;
            background-color: #0054b6;

            .rbr-popup2-title {
              position: absolute;
              left: 20px;
              height: 50px;
              line-height: 50px;
              font-size: 25px;
            }

            .rbr-popup2-close {
              position: absolute;
              right: 0;
              width: 35px;
              height: 36px;
              padding: 7px;
              background-color: rgba(6, 43, 92, 0.8);
              cursor: pointer;

              i {
                font-size: 35px;
              }
            }
          }

          .rbr-popup2-box {
            .rbr-popup2-title {
              width: 548px;
              height: 60px;
              margin-left: 47px;
              font-size: 20px;
              line-height: 60px;
              padding-left: 20px;
            }

            .rbr-popup2-text {
              width: 568px;
              height: 55px;
              line-height: 55px;
              text-align: center;
              font-size: 20px;
              border-top: 1px solid #192640;
              margin-left: 47px;
            }

            .rbr-popup2-list {
              width: 568px;
              height: 230px;
              margin-left: 47px;
              overflow-y: scroll;

              .rbr-popup2-li {
                display: flex;
                width: 564px;
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                text-align: center;
                border-top: 1px solid #192640;

                .rbr-popup2-li-text {
                  width: 310px;
                }

                .rbr-popup2-li-per {
                  width: 238px;
                }
              }
            }
          }
        }
        .rbr-popup3 {
          background: url("../../../../assets/csjcys/popjy3.png");
          background-size: 100% 100%;

          .rbr-popup3-head {
            position: relative;
            width: 568px;
            height: 50px;
            margin: 25px 25px 0px 47px;
            background-color: #0054b6;

            .rbr-popup3-title {
              position: absolute;
              left: 20px;
              height: 50px;
              line-height: 50px;
              font-size: 25px;
            }

            .rbr-popup3-close {
              position: absolute;
              right: 0;
              width: 35px;
              height: 36px;
              padding: 7px;
              background-color: rgba(6, 43, 92, 0.8);
              cursor: pointer;

              i {
                font-size: 35px;
              }
            }
          }

          .rbr-popup3-list-title {
            display: flex;
            width: 548px;
            height: 55px;
            margin-left: 47px;
            font-size: 20px;
            line-height: 55px;

            .rbr-popup3-list-title1 {
              width: 40%;
              margin-left: 5px;
              text-align: center;
            }
            .rbr-popup3-list-title2 {
              width: 32%;
              margin-left: 5px;
              text-align: center;
            }
            .rbr-popup3-list-title3 {
              width: 28%;
              margin-left: 5px;
              text-align: center;
            }
          }

          .rbr-popup3-list {
            width: 568px;
            height: 290px;
            margin-left: 47px;
            overflow-y: scroll;

            .rbr-popup3-li {
              display: flex;
              width: 564px;
              height: 60px;
              line-height: 60px;
              border-top: 1px solid #192640;

              .rbr-popup3-li-text {
                width: 40%;
                text-align: center;
              }
              .rbr-popup3-li-num {
                width: 32%;
                text-align: center;
              }
              .rbr-popup3-li-per {
                width: 28%;
                text-align: center;
              }
            }
          }
        }
        .rbr-popup4 {
          background: url("../../../../assets/csjcys/popjy4.png");
          background-size: 100% 100%;
        }
        .rbr-popup5 {
          background: url("../../../../assets/csjcys/popjy5.png");
          background-size: 100% 100%;
        }
      }
    }
  }
}

::-webkit-scrollbar {
  width: 4px;
  border-radius: 8px;
  background-color: rgba(0, 175, 249, 0.2);
}
::-webkit-scrollbar-thumb {
  width: 4px;
  border-radius: 8px;
  // -webkit-box-shadow: inset 0 0 6px @color3;
  background-color: rgba(79, 158, 253, 0.5);
}
</style>
