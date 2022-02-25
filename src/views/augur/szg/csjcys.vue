<template>
  <div class="csjcys">
    <div class="header"></div>
    <div class="csjcysL">
      <CsjcysL v-if="showL == 'csjcysL'"></CsjcysL>
    </div>
    <div class="csjcysR">
      <CsjcysR v-if="showR == 'csjcysR'"></CsjcysR>
    </div>
  </div>
</template>

<script>
import CsjcysL from "./csjcys/CsjcysL.vue";
import CsjcysR from "./csjcys/CsjcysR.vue";
export default {
  data() {
    return {
      showL: "csjcysL",
      showR: "csjcysR"
    };
  },
  components: {
    CsjcysL,
    CsjcysR
  }
};
</script>

<style lang="less" scoped>
.csjcys {
  height: 1080px;
  width: 5076px;
  background-color: rgba(2, 15, 43, 0.7);

  .header {
    width: 5760px;
    height: 135px;
  }

  .csjcysL {
    float: left;
    margin-left: 50px;
    width: 2060px;
    height: 900px;
    border: 1px solid cyan;
  }

  .csjcysR {
    float: right;
    margin-right: 50px;
    width: 1819px;
    height: 900px;
    border: 1px solid cyan;
  }
}
</style>
