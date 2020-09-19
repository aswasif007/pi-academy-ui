import Vue from 'vue';
import Vuex from 'vuex';
import { getObjFromArray } from '../utils';
import { Course, Enrollment, EnrollmentMeta } from '../resources/course';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courseObjs: {},
    enrollmentObjs: {},
    enrollmentMetaObjs: {},
  },
  mutations: {
    ADD_COURSES(state, courses) {
      state.courseObjs = {...state.courseObjs, ...getObjFromArray(courses, 'guid')};
    },
    ADD_ENROLLMENTS(state, enrollments) {
      state.enrollmentObjs = {...state.enrollmentObjs, ...getObjFromArray(enrollments, 'guid')};
    },
    ADD_ENROLLMENT_META(state, metaObjs) {
      state.enrollmentMetaObjs = {...state.enrollmentMetaObjs, ...getObjFromArray(metaObjs, 'guid')};
    }
  },
  actions: {
    async reloadEnrolledCourses(store) {
      await Enrollment.getMany();
    },
    async reloadAllCourses(store) {
      await Course.getMany();
    },
    async reloadCourseMeta({ commit }, courseGuid) {
      await EnrollmentMeta.getOne(courseGuid);
    },
  },
  modules: {
  },
  getters: {
    enrolledCourses: state => Object.values(state.enrollmentObjs),
    allCourses: state => Object.values(state.courseObjs),
    courseMeta: state => state.enrollmentMetaObjs,
  },
});
