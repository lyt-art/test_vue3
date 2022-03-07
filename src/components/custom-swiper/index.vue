<template>
  <div class="swiper" @mouseenter="stopPlay()" @mouseleave="autoPlay()">
    <div class="swiper_prev" @click="prev(-210)"></div>
    <div class="swiper_container">
      <div class="swiper_wrapper" :style="{ left: left + 'px' }">
        <div class="swiper_slide"></div>
        <div class="swiper_slide"></div>
        <div class="swiper_slide"></div>
        <div class="swiper_slide"></div>
        <div class="swiper_slide"></div>
        <div class="swiper_slide"></div>
      </div>
    </div>
    <div class="swiper_next" @click="next(210)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      timer: "",
    };
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    autoPlay() {
      this.timer = setInterval(() => {
        this.next(210);
      }, 2000);
    },
    stopPlay() {
      clearInterval(this.timer);
    },
    prev(offset) {
      var list = document.getElementsByClassName("swiper_wrapper")[0];
      var leftbefore =
        parseInt(list.style.left.slice(0, list.style.left.indexOf("p"))) +
        offset;
      //       console.log(leftbefore);
      if (leftbefore < -420) {
        //轮播到第三张图片时跳转到第一张
        this.left = 0;
      } else {
        this.left = leftbefore;
      }
    },
    next(offset) {
      var list = document.getElementsByClassName("swiper_wrapper")[0];
      var leftbefore =
        parseInt(list.style.left.slice(0, list.style.left.indexOf("p"))) +
        offset;
      //       console.log(leftbefore);
      if (leftbefore > 0) {
        //轮播到第一张图片时跳转到第二张
        this.left = -420;
      } else {
        this.left = leftbefore;
      }
    },
  },
};
</script>

<style scoped>
/**图片大小 w:200px   h:150px  margin-right:10px*/
.swiper {
  position: relative;
  margin-top: 100px;
  margin-left: 50px;
  width: 820px;
  height: 200px;
  background-color: rgba(2, 15, 43, 0.7);
}

.swiper_prev {
  position: absolute;
  top: 75px;
  left: 25px;
  width: 50px;
  height: 50px;
  background: url("../../assets/custom_swiper/left.png") no-repeat center center;
}
.swiper_prev:hover {
  background: url("../../assets/custom_swiper/left2.png") no-repeat center center;
}

.swiper_next {
  position: absolute;
  top: 75px;
  right: 25px;
  width: 50px;
  height: 50px;
  background: url("../../assets/custom_swiper/right2.png") no-repeat center center;
}
.swiper_next:hover {
  background: url("../../assets/custom_swiper/right.png") no-repeat center center;
}

.swiper_container {
  position: absolute;
  top: 25px;
  right: 100px;
  width: 620px;
  height: 150px;
  overflow: hidden;
}
.swiper_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 1250px;
  height: 150px;
}
.swiper_slide {
  float: left;
  margin-right: 10px;
  width: 200px;
  height: 150px;
  background-size: 200px 150px;
}
.swiper_slide:nth-child(1) {
  background: url("../../assets/custom_swiper/1.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.swiper_slide:nth-child(2) {
  background: url("../../assets/custom_swiper/2.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.swiper_slide:nth-child(3) {
  background: url("../../assets/custom_swiper/3.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.swiper_slide:nth-child(4) {
  background: url("../../assets/custom_swiper/1.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.swiper_slide:nth-child(5) {
  background: url("../../assets/custom_swiper/2.jpg") no-repeat center center;
  background-size: 100% 100%;
}
.swiper_slide:nth-child(6) {
  margin-right: 0px !important;
  background: url("../../assets/custom_swiper/3.jpg") no-repeat center center;
  background-size: 100% 100%;
}
</style>