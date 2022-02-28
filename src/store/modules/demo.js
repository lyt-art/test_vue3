const demo = {
  state: {
    num: 1
  },
  getters: {
    numGtters: state => {
      return `数据为${state.num}`;
    }
  },
  mutations: {
    addNumMutations(state) {
      state.num += 1;
    },
    decNumMutations(state) {
      state.num -= 1;
    }
  },
  actions: {}
};

export default demo;
