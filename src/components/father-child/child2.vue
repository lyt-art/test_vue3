<template>
  <div class="child2">
    2、子传父：<button @click="sendFather()">通过@func</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendFather() {
      this.$emit("getChild2", "子传父：通过@func（emit）");
    }
  }
};
</script>

<style lang="less" scoped>
.child2 {
  button {
    cursor: pointer;
  }
}
</style>
