import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = {
  getters: {
    count(state) {
      return state.count;
    },
  },
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
  },
  actions: {
    incrementCount({ commit, state }) {
      commit('setCount', state.count + 1);
    },
  },
  modules: {
  },
};

export default new Vuex.Store(store);
