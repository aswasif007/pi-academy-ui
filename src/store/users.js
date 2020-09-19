import Vue from 'vue';
import Vuex from 'vuex';

import { User, UserProfile } from '../resources/user';
import { getObjFromArray } from '../utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUserGuid: null,
    userProfileObjs: {},
    userObjs: {},
  },
  mutations: {
    ADD_USERS(state, users) {
      state.userObjs = {...state.userObjs, ...getObjFromArray(users, 'guid')};
    },
    ADD_USER_PROFILES(state, profiles) {
      state.userProfileObjs = {...state.userProfileObjs, ...getObjFromArray(profiles, 'guid')};
    },
    SET_CURRENT_USER_GUID(state, guid) {
      state.currentUserGuid = guid;
    },
  },
  actions: {
    async reloadCurrentUser(store) {
      await User.getCurrentUser();
    },
    async reloadUserProfile(store, userGuid) {
      await UserProfile.getOne(userGuid);
    },
  },
  modules: {
  },
  getters: {
    currentUser: state => {
      return state.currentUserGuid ? state.userObjs[state.currentUserGuid] : null;
    },
    userProfiles: state => state.userProfileObjs,
  }
});
