<template>
  <div class="child3">
    3、子传父：<button @click="sendFather()">通过ref</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendFather() {
      this.$emit("getChild3func", "子传父：通过ref（emit、on）");
    }
  }
};
</script>

<style lang="less" scoped>
.child3 {
  button {
    cursor: pointer;
  }
}
</style>
