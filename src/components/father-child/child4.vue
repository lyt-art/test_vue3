<template>
  <div class="child4">
    4、子传父：<button @click="sendFather()">通过props</button>
  </div>
</template>

<script>
export default {
  props: ["getChild4"],
  methods: {
    sendFather() {
      this.getChild4("子传父：通过props");
    }
  }
};
</script>

<style lang="less" scoped>
.child4 {
  button {
    cursor: pointer;
  }
}
</style>
