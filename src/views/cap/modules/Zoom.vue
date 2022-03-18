<template>
  <div class="zoom">
    <!-- 原图 -->
    <div class="pic"></div>
    <!-- 事件 -->
    <div class="event" @mousemove="handler"></div>
    <!-- 放大的图片 -->
    <div class="bigPic"><div class="big" ref="big"></div></div>
    <!-- 遮罩层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handler(event) {
      let mask = this.$refs.mask;
      let big = this.$refs.big;
      let left = event.offsetX - mask.offsetWidth / 2;
      let top = event.offsetY - mask.offsetHeight / 2;
      // 约束范围
      // 修改元素left/top值
      if (left <= 0) left = 0;
      if (left >= mask.offsetWidth) left = mask.offsetWidth;
      if (top <= 0) top = 0;
      if (top >= mask.offsetHeight) top = mask.offsetHeight;
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      big.style.left = -2 * left + "px";
      big.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less" scoped>
.zoom {
  position: relative;
  display: flex;
  width: 810px;
  height: 270px;
  margin-left: 50px;
  margin-top: 100px;

  .pic {
    width: 405px;
    height: 270px;
    background: url("D:/cap_study/test_vue3/src/assets/custom_swiper/1.jpg")
      no-repeat;
    background-size: 100% 100%;
  }

  .event {
    position: absolute;
    top: 0;
    left: 0;
    width: 405px;
    height: 270px;
  }

  .bigPic {
    position: absolute;
    top: 0;
    right: 0;
    width: 405px;
    height: 270px;
    border: 1px solid #000;
    overflow: hidden;

    .big {
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      background: url("D:/cap_study/test_vue3/src/assets/custom_swiper/1.jpg")
        no-repeat;
      background-size: 100% 100%;
    }
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 202.5px;
    height: 135px;
    background-color: rgba(13, 235, 224, 0.336);
    cursor: pointer;
  }
}
</style>