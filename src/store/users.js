import Vue from 'vue';
import Vuex from 'vuex';

import { getCurrentUser } from '../services/auth-service';
import { getUserProfile } from '../services/profile-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfiles: {},
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setUserProfile(state, profile) {
      state.userProfiles = {...state.userProfiles, [profile.guid]: profile};
    },
  },
  actions: {
    async reloadCurrentUser({ commit }) {
      commit('setCurrentUser', await getCurrentUser());
    },
    async reloadUserProfile({ commit }, userGuid) {
      commit('setUserProfile', await getUserProfile(userGuid));
    },
  },
  modules: {
  },
  getters: {
    currentUser: state => state.currentUser,
    userProfiles: state => state.userProfiles,
  }
});
