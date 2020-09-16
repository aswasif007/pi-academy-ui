import Vue from 'vue';
import Vuex from 'vuex';
import { getHomeThreads, getCourseThread } from '../services/discussion-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeThreads: [],
    courseThreads: {},
  },
  mutations: {
    setHomeThreads(state, threads) {
      state.homeThreads = threads;
    },
    setCourseThreads(state, { courseGuid, threads}) {
      state.courseThreads = {...state.courseThreads, [courseGuid]: threads};
    }
  },
  actions: {
    async reloadHomeThreads({ commit }) {
      commit('setHomeThreads', await getHomeThreads());
    },
    async reloadCourseThreads({ commit }, courseGuid) {
      const threads = await getCourseThread(courseGuid);
      commit('setCourseThreads', { courseGuid, threads });
    },
  },
  modules: {
  },
  getters: {
    homeThreads: state => state.homeThreads,
    courseThreads: state => state.courseThreads,
  },
});
