import Vue from 'vue';
import Vuex from 'vuex';
import { getEnrolledCourses, getAllCourses } from '../services/course-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enrolledCourses: [],
    allCourses: [],
  },
  mutations: {
    setEnrolledCourses(state, courses) {
      state.enrolledCourses = courses;
    },
    setAllCourses(state, courses) {
      state.allCourses = courses;
    }
  },
  actions: {
    async reloadEnrolledCourses({ commit }) {
      commit('setEnrolledCourses', await getEnrolledCourses());
    },
    async reloadAllCourses({ commit }) {
      commit('setAllCourses', await getAllCourses());
    }
  },
  modules: {
  },
  getters: {
    enrolledCourses: state => state.enrolledCourses,
    allCourses: state => state.allCourses,
  },
});
