const getters = {
  adminGetters(state) {
    return `管理员是${state.admin}`;
  },
  pwsGettersWithParams: state => params => {
    return `${params}是${state.pws}`;
  }
};

export default getters;
