import Vue from 'vue';
import Vuex from 'vuex';
import { getEnrolledCourses } from '../services/course-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enrolledCourses: [],
  },
  mutations: {
    setEnrolledCourses(state, courses) {
      state.enrolledCourses = courses;
    },
  },
  actions: {
    async reloadEnrolledCourses({ commit }) {
      commit('setEnrolledCourses', await getEnrolledCourses());
    },
  },
  modules: {
  },
  getters: {
    enrolledCourses: state => state.enrolledCourses,
  },
});
