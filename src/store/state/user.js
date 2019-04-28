const user = {
  state: {
    time: ''
  },

  mutations: {
    setTime: (state, time) => {
      state.time = time
    }
  },

  actions: {
    setTime( { commit, state}, time) {
      commit('setTime', time)
    }
  }
};

export default user
