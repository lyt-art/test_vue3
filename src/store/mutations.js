const mutations = {
  pwsMutations(state) {
    state.pws = "111111";
  },
  pwsMutationsWithParams(state, params) {
    state.pws = params;
  },
  idMutationsWithParams(state, params) {
    state.visitId = params;
  },
  menuListMutationsWithParams(state, params) {
    state.menuList = params;
  }
};

export default mutations;
