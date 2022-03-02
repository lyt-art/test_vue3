<template>
  <div class="child5">
    5、子传父：<button @click="sendFather()">通过sync</button>
  </div>
</template>

<script>
export default {
  props: {
    getChild5: Number
  },
  methods: {
    sendFather() {
      let newV = this.getChild5 + 1;
      this.$emit("update:getChild5", newV);
    }
  }
};
</script>

<style lang="less" scoped>
.child5 {
  button {
    cursor: pointer;
  }
}
</style>
