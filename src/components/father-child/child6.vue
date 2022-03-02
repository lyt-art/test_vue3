<template>
  <div class="child6">
    6、组件通信：<button @click="sendFather()">通过bus</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendFather() {
      this.$bus.$emit("getChild6", "组件通信：通过bus");
    }
  }
};
</script>

<style lang="less" scoped>
.child6 {
  button {
    cursor: pointer;
  }
}
</style>
