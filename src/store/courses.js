import Vue from 'vue';
import Vuex from 'vuex';
import { getEnrolledCourses, getAllCourses, getCourseMeta } from '../services/course-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enrolledCourses: [],
    allCourses: [],
    courseMeta: {},
  },
  mutations: {
    setEnrolledCourses(state, courses) {
      state.enrolledCourses = courses;
    },
    setAllCourses(state, courses) {
      state.allCourses = courses;
    },
    setCourseMeta(state, meta) {
      state.courseMeta = {...state.courseMeta, [meta.guid]: meta};
    }
  },
  actions: {
    async reloadEnrolledCourses({ commit }) {
      commit('setEnrolledCourses', await getEnrolledCourses());
    },
    async reloadAllCourses({ commit }) {
      commit('setAllCourses', await getAllCourses());
    },
    async reloadCourseMeta({ commit }, courseGuid) {
      commit('setCourseMeta', await getCourseMeta(courseGuid));
    }
  },
  modules: {
  },
  getters: {
    enrolledCourses: state => state.enrolledCourses,
    allCourses: state => state.allCourses,
    courseMeta: state => state.courseMeta,
  },
});
