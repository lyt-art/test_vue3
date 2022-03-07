<template>
  <div class="learn">
    <div class="land">
      <div class="line">
        <div class="center_box">
          <div class="box" :class="isShow == 1 ? 'box1_light' : 'box1'"></div>
          <div class="box" :class="isShow == 2 ? 'box2_light' : 'box2'"></div>
          <div class="box" :class="isShow == 3 ? 'box3_light' : 'box3'"></div>
          <div class="box" :class="isShow == 4 ? 'box4_light' : 'box4'"></div>
          <div class="box" :class="isShow == 5 ? 'box5_light' : 'box5'"></div>
          <div class="box" :class="isShow == 6 ? 'box6_light' : 'box6'"></div>
          <div class="box" :class="isShow == 7 ? 'box7_light' : 'box7'"></div>
        </div>
      </div>
      <div class="content">
        <div class="left_wrap">
          <div class="left_wrap1"><div class="content1"></div></div>
          <div class="left_wrap3"><div class="content3"></div></div>
          <div class="left_wrap5"><div class="content5"></div></div>
          <div class="left_wrap7"><div class="content7"></div></div>
        </div>
        <div class="right_wrap">
          <div class="right_wrap2"><div class="content2"></div></div>
          <div class="right_wrap4"><div class="content4"></div></div>
          <div class="right_wrap6"><div class="content6"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: 0,
      myTimeOut: ""
    };
  },
  mounted() {
    this.setMyTimeOut();
  },
  methods: {
    setMyTimeOut() {
      this.myTimeOut = setInterval(() => {
        this.isShow++;
        if (this.isShow == 8) {
          this.isShow = 1;
        }
      }, 2000);
    }
  }
};
</script>
<style lang="less" scoped>
.learn {
  .land {
    position: relative;
    width: 910px;
    height: 882px;
    margin: 20px;
    background-color: rgba(2, 15, 43, 0.7);
    .line {
      position: absolute;
      left: 270px;
      top: 90px;
      width: 353px;
      height: 660px;
      background: url("../../../assets/szg_land/imgs_line/line.png") no-repeat
        center center;
      background-size: 100% 100%;
      border: 1px solid #fff;

      .center_box {
        display: flex;
        flex-direction: column;

        .box {
          position: absolute;
          width: 202px;
          height: 158px;
          background-size: 100% 100%;
        }
        .box1 {
          top: -30px;
          left: 100px;
          background: url("../../../assets/szg_land/imgs_line/气象.png")
            no-repeat center center;
        }
        .box1_light {
          top: -30px;
          left: 100px;
          background: url("../../../assets/szg_land/imgs_line/气象-选中.png")
            no-repeat center center;
        }
        .box2 {
          top: 80px;
          left: 25px;
          background: url("../../../assets/szg_land/imgs_line/地形地貌.png")
            no-repeat center center;
        }
        .box2_light {
          top: 80px;
          left: 25px;
          background: url("../../../assets/szg_land/imgs_line/地形地貌-选中.png")
            no-repeat center center;
        }
        .box3 {
          top: 168px;
          left: 128px;
          background: url("../../../assets/szg_land/imgs_line/植被.png")
            no-repeat center center;
        }
        .box3_light {
          top: 168px;
          left: 128px;
          background: url("../../../assets/szg_land/imgs_line/植被-选中.png")
            no-repeat center center;
        }
        .box4 {
          top: 274px;
          left: 68px;
          background: url("../../../assets/szg_land/imgs_line/水文.png")
            no-repeat center center;
        }
        .box4_light {
          top: 274px;
          left: 68px;
          background: url("../../../assets/szg_land/imgs_line/水文-选中.png")
            no-repeat center center;
        }
        .box5 {
          top: 388px;
          left: 18px;
          background: url("../../../assets/szg_land/imgs_line/土壤.png")
            no-repeat center center;
        }
        .box5_light {
          top: 388px;
          left: 18px;
          background: url("../../../assets/szg_land/imgs_line/土壤-选中.png")
            no-repeat center center;
        }
        .box6 {
          top: 475px;
          left: 106px;
          background: url("../../../assets/szg_land/imgs_line/矿产.png")
            no-repeat center center;
        }
        .box6_light {
          top: 475px;
          left: 106px;
          background: url("../../../assets/szg_land/imgs_line/矿物-选中.png")
            no-repeat center center;
        }
        .box7 {
          top: 588px;
          left: 33px;
          background: url("../../../assets/szg_land/imgs_line/地质.png")
            no-repeat center center;
        }
        .box7_light {
          top: 588px;
          left: 33px;
          background: url("../../../assets/szg_land/imgs_line/地质-选中.png")
            no-repeat center center;
        }
      }
    }
    .content {
      .left_wrap {
      }
    }
  }
}
</style>
