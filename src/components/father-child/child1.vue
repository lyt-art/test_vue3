<template>
  <div class="child1">1、{{ sendChild1 }}</div>
</template>

<script>
export default {
  props: {
    sendChild1: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>
