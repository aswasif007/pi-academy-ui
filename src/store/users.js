import Vue from 'vue';
import Vuex from 'vuex';

import { getCurrentUser } from '../services/auth-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async reloadCurrentUser({ commit }) {
      commit('setCurrentUser', await getCurrentUser());
    },
  },
  modules: {
  },
  getters: {
    currentUser: state => state.currentUser,
  }
});
