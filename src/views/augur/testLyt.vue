<template>
  <div class="testBox">
    <div class="top">
      <div class="t-title">
        <div class="left">
          <div class="icon"></div>
          <div class="title">
            <div class="title-top">全国一体化在线政务服务平台</div>
            <div class="title-bottom">广东政务服务网</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="text">佛山市工程建设项目审批系统网上办事大厅</div>
        </div>
        <div class="right">
          <el-button plain>登录</el-button>
        </div>
      </div>
      <div class="t-input">
        <el-input
          v-model="input"
          prefix-icon="el-icon-search"
          placeholder="可输入项目类型/事件/结果物"
        ></el-input>
        <el-button plain>查询</el-button>
      </div>
      <div class="t-list">
        <div class="item" v-for="(item, index) in listData" :key="index">
          <div
            class="bgc"
            :class="{ bgcActive: index == activeIndex }"
            @click="activeIndex = index"
          >
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="row">
        <div class="left">
          <div class="num">19 <span class="unit">个项目类型</span></div>
          <div class="text">佛山市（全市范围）</div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="right">
          <div class="item" v-for="(item, index) in listData2" :key="index">
            <div class="num">{{ item.num }}</div>
            <div class="text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="tab">
          <div
            class="item"
            v-for="(item, index) in tabList"
            :key="index"
            @click="activeIndex2 = index"
          >
            <div class="text" :class="{ tabActive: index == activeIndex2 }">
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="cont">
          <div class="item" v-for="(item, index) in listData3" :key="index">
            <img :src="item.imgUrl" alt="" />
            <div class="text" :class="{ textActive: activeIndex3 == index }">
              <div class="text1">{{ item.text1 }}</div>
              <div style="display: flex; align-items: center; margin-top: 10px">
                <span class="text2">{{
                  item.text2.length > 7 ? item.text2.slice(0, 7) + '...' : item.text2
                }}</span>
                <el-tooltip effect="dark" :content="item.cont" placement="right"
                  ><span class="icon" @mouseenter="activeIndex3 = index"></span>
                </el-tooltip>
              </div>
            </div>
          </div>

          <div class="additem">
            <div class="icon"></div>
            <div class="text">查看申报指引</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">Copyright@奥格一体化政务服务中心版权所有</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      activeIndex2: 1,
      activeIndex3: 4,
      listData: [
        {
          imgUrl: require("../../assets/testLyt/1.png"),
          text: "申报指引",
        },
        {
          imgUrl: require("../../assets/testLyt/2.png"),
          text: "我要申报",
        },
        {
          imgUrl: require("../../assets/testLyt/3.png"),
          text: "我的项目",
        },
        {
          imgUrl: require("../../assets/testLyt/4.png"),
          text: "我的空间",
        },
        {
          imgUrl: require("../../assets/testLyt/5.png"),
          text: "服务协同",
        },
      ],
      listData2: [
        {
          num: 116,
          text: "禅城区事项数",
        },
        {
          num: 116,
          text: "禅城区事项数",
        },
        {
          num: 116,
          text: "禅城区事项数",
        },
        {
          num: 116,
          text: "禅城区事项数",
        },
        {
          num: 116,
          text: "禅城区事项数",
        },
        {
          num: 116,
          text: "禅城区事项数",
        },
      ],
      tabList: [
        { text: "政府投资类" },
        { text: "社会投资类" },
        { text: "其他" },
      ],
      listData3: [
        {
          imgUrl: require("../../assets/testLyt/11.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
        {
          imgUrl: require("../../assets/testLyt/22.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目社会投资工程",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
        {
          imgUrl: require("../../assets/testLyt/33.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
        {
          imgUrl: require("../../assets/testLyt/44.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
        {
          imgUrl: require("../../assets/testLyt/11.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
        {
          imgUrl: require("../../assets/testLyt/22.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
        {
          imgUrl: require("../../assets/testLyt/33.png"),
          text1: "社会投资工程建设项目",
          text2: "一般工业项目",
          cont: "社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目社会投资工程建设项目",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.testBox {
  max-width: 1920px;
  margin: 0 auto;
  min-width: 1920px;
  overflow-x: auto;
  height: 1500px;

  .top {
    width: calc(100% - 650px);
    height: 500px;
    padding: 20px 325px 50px 325px;
    background-color: rgba(27, 113, 227);

    .t-title {
      width: 100%;

      .left {
        float: left;
        display: flex;
        align-items: center;

        .icon {
          width: 50px;
          height: 50px;
          background: url("../../assets/testLyt/title.png");
          background-size: 100% 100%;
        }
        .title {
          display: flex;
          flex-direction: column;
          height: 50px;
          margin-left: 10px;

          .title-top {
            height: 20px;
            font-size: 12px;
            color: rgba(75, 144, 199);
            background-color: #fff;
            line-height: 20px;
            text-align: center;
          }
          .title-bottom {
            height: 30px;
            font-size: 24px;
            color: #fff;
            line-height: 30px;
            text-align: center;
          }
        }
        .el-divider--vertical {
          height: 50px;
          margin: 0 10px 0 18px;
        }
        .text {
          height: 30px;
          font-size: 24px;
          color: #fff;
          line-height: 30px;
          text-align: center;
        }
      }

      .right {
        float: right;

        .el-button {
          width: 60px;
          height: 30px;
          background-color: transparent;
          border: 1px solid #fff;
          color: #fff;
          font-size: 16px;
          text-align: center;
          padding: 0;
          line-height: 30px;
          margin-top: 15px;
        }
      }
    }

    .t-input {
      display: flex;
      width: 100%;
      margin: 100px 50% 80px;
      transform: translateX(-392px);

      .el-input {
        width: 685px;
        height: 50px;

        /deep/ .el-input__inner {
          width: 685px;
          height: 50px;
          border-radius: 4px 0 0 4px;
          border: 0px;
        }
      }
      .el-button {
        width: 100px;
        height: 50px;
        padding: 0 !important;
        line-height: 30px;
        font-size: 18px;
        text-align: center;
        color: #fff;
        background-color: rgba(255, 184, 34);
        border: 0px;
        border-radius: 0 4px 4px 0;
      }
    }

    .t-list {
      display: flex;
      flex-wrap: wrap;
      width: 1270px;
      height: 250px;

      .item {
        width: 250px;
        height: 220px;

        .bgc {
          width: 250px;
          height: 190px;

          img {
            width: 110px;
            height: 165px;
            margin-left: 50%;
            transform: translateX(-55px);
          }
        }
        .bgcActive {
          background: rgba(255, 255, 255, 0.1);
        }

        .text {
          font-size: 14px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }

  .center {
    width: calc(100% - 650px);
    height: 765px;
    padding: 30px 325px 65px;

    .row {
      display: flex;
      width: calc(100% - 100px);
      height: 50px;
      background-color: rgba(245, 245, 245);
      padding: 35px 50px 35px 50px;

      .left {
        .num {
          font-weight: bold;
          font-size: 24px;
          .unit {
            font-weight: normal;
            font-size: 16px;
          }
        }
        .text {
          font-size: 16px;
        }
      }

      .el-divider--vertical {
        height: 24px;
        margin: 12px 30px 0 45px;
      }

      .right {
        display: flex;
        justify-content: space-between;
        width: 920px;

        .item {
          width: 100px;
          text-align: center;

          .num {
            font-weight: bold;
            font-size: 24px;
          }
          .text {
            font-size: 16px;
          }
        }
      }
    }

    .box {
      width: 100%;
      height: 615px;
      margin-top: 35px;

      .tab {
        display: flex;
        height: 40px;
        font-size: 20px;
        font-weight: 500;
        border-bottom: 1px solid rgba(245, 245, 245, 0.2);

        .item {
          height: 40px;
          margin-right: 40px;
        }
        .text {
          height: 35px;
        }
        .tabActive {
          color: rgb(22, 154, 255);
          border-bottom: 5px solid rgb(22, 154, 255);
        }
      }

      .cont {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 535px;
        margin-top: 35px;

        .item {
          display: flex;
          flex-direction: column;
          width: 278px;
          height: 250px;
          box-shadow: 10px 10px 0px 0px rgb(247, 248, 249);
          margin-right: 50px;

          img {
            width: 100%;
            height: 140px;
          }

          .text {
            width: calc(100% - 100px);
            height: 50px;
            padding: 30px 50px 30px 50px;
            text-align: center;
            font-size: 17px;

            .text2 {
              display: inline-block;
              font-size: 17px;
              margin-right: 10px;
              line-height: 21px;
            }
            .icon {
              display: inline-block;
              width: 20px;
              height: 20px;
              background: url("../../assets/testLyt/normal.png");
              background-size: 100% 100%;
            }
          }
          .textActive {
            background-color: rgba(27, 113, 227);
            color: #fff !important;

            .icon {
              background: url("../../assets/testLyt/active.png") !important;
              background-size: 100% 100% !important;
            }
          }
        }
        .item:nth-child(1),
        .item:nth-child(2),
        .item:nth-child(3) {
          margin-bottom: 35px;
        }
        .item:nth-child(4n) {
          margin-right: 0;
        }

        .additem {
          width: 108px;
          height: 90px;
          background-color: rgb(247, 248, 249);
          box-shadow: 10px 10px 0px 0px rgba(247, 248, 249, 0.1);
          padding: 80px 85px 80px 85px;

          .icon {
            width: 50px;
            height: 50px;
            background: url("../../assets/testLyt/add.png");
            background-size: 100% 100%;
            margin-bottom: 17px;
            margin-left: 20px;
          }

          .text {
            color: rgb(180, 181, 185);
          }
        }
      }
    }
  }

  .bottom {
    width: calc(100% -815px);
    height: 13px;
    color: rgb(180, 181, 185);
    background-color: rgba(249, 250, 251);
    padding: 27px 0 30px 815px;
  }
}
</style>

<style lang="less">
.el-tooltip__popper {
  max-width: 470px;
  font-size: 14px;
  padding: 20px;
}
</style>