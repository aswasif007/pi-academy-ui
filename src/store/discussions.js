import Vue from 'vue';
import Vuex from 'vuex';
import { getHomeThreads } from '../services/discussion-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeThreads: [],
  },
  mutations: {
    setHomeThreads(state, threads) {
      state.homeThreads = threads;
    }
  },
  actions: {
    async reloadHomeThreads({ commit }) {
      commit('setHomeThreads', await getHomeThreads());
    },
  },
  modules: {
  },
  getters: {
    homeThreads: state => state.homeThreads,
  },
});
