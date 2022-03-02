const capMixin = {
  data() {
    return {
      name: "橘猫"
    };
  },
  methods: {
    getMsgMixin() {
      return `${this.name}：在mixin中vue的data、生命周期、方法等都可以使用`;
    }
  },
  created() {
    alert("此页面使用了mixin");
  }
};

export default capMixin;
