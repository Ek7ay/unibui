import Vuex from 'vuex'
import Vue from 'vue'
import user from './state/user'
import getters from './getters/getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
});
export default store;
