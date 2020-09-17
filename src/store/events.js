import Vue from 'vue';
import Vuex from 'vuex';
import { getRecentEvents } from '../services/event-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recentEvents: [],
  },
  mutations: {
    setRecentEvents(state, event) {
      state.recentEvents = event;
    },
  },
  actions: {
    async reloadRecentEvents({ commit }) {
      commit('setRecentEvents', await getRecentEvents());
    },
  },
  modules: {
  },
  getters: {
    recentEvents: state => state.recentEvents,
  },
});
