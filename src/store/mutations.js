const mutations = {
  pwsMutations(state) {
    state.pws = "111111";
  },
  pwsMutationsWithParams(state, params) {
    state.pws = params;
  }
};

export default mutations;
