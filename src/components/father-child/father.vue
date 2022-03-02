<template>
  <div class="father">
    <Child1 :sendChild1="msg1" class="child"></Child1>
    <Child2 @getChild2="getChild2" class="child"></Child2
    ><span>{{ msg2 }}</span>
    <Child3 ref="getChild3" class="child"></Child3>
    <span>{{ msg3 }}</span>
    <Child4 :getChild4="getChild4" class="child"></Child4>
    <span>{{ msg4 }}</span>
    <Child5 :getChild5.sync="msg5" class="child"></Child5>
    <span class="msg5">数据变化：{{ msg5 }}</span>
    <Child6 class="child"></Child6>
    <span>{{ msg6 }}</span>
  </div>
</template>

<script>
import Child1 from "./child1.vue";
import Child2 from "./child2.vue";
import Child3 from "./child3.vue";
import Child4 from "./child4.vue";
import Child5 from "./child5.vue";
import Child6 from "./child6.vue";
export default {
  data() {
    return {
      msg1: "父传子：通过props",
      msg2: "",
      msg3: "",
      msg4: "",
      msg5: 1,
      msg6: ""
    };
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
    Child6
  },
  mounted() {
    // child3 ref
    this.$refs.getChild3.$on("getChild3func", this.getChild3func);
    // child6 bus
    this.$bus.$on("getChild6", this.getChild6func);
  },
  methods: {
    // child2 @func
    getChild2(params) {
      this.msg2 = params;
    },
    // child3 ref
    getChild3func(params) {
      this.msg3 = params;
    },
    // child4 sync
    getChild4(params) {
      this.msg4 = params;
    },
    // child6 bus
    getChild6func(params) {
      this.msg6 = params;
    }
  },
  destroyed() {
    // child6 bus
    this.$bus.$off("getChild6", this.getChild6func);
  }
};
</script>

<style lang="less" scoped>
.father {
  .child {
    width: 100%;
    height: 23px;
    background-color: gray;
    margin-bottom: 1px;
  }
  .msg5 {
    padding: 0 20px;
  }
}
</style>
