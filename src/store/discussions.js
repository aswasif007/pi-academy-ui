import Vue from 'vue';
import Vuex from 'vuex';
import { getHomeThreads, getCourseThread, addThreadComment, addThread } from '../services/discussion-service';
import { DiscussionThread, Discussion } from '../resources/discussion';
import { getObjFromArray } from '../utils';

import _ from 'lodash';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeThreadGuids: [],
    courseThreadGuids: {},
    discussionObjs: {},
    threadObjs: {},
  },
  mutations: {
    ADD_DISCUSSIONS(state, discussions) {
      state.discussionObjs = {...state.discussionObjs, ...getObjFromArray(discussions, 'guid')};
    },
    ADD_THREADS(state, threads) {
      state.threadObjs = {...state.threadObjs, ...getObjFromArray(threads, 'guid')};
    },
    SET_HOME_THREAD_GUIDS(state, guids) {
      state.homeThreadGuids = guids;
    },
    ADD_HOME_THREAD_GUIDS(state, guids) {
      state.homeThreadGuids = [...guids, ...state.homeThreadGuids];
    },
    SET_COURSE_THREAD_GUIDS(state, { courseGuid, threadGuids }) {
      state.courseThreadGuids = {...state.courseThreadGuids, [courseGuid]: threadGuids};
    },
  },
  actions: {
    async reloadHomeThreads(store) {
      const threads = await DiscussionThread.getMany();
      store.commit('SET_HOME_THREAD_GUIDS', threads.map(th => th.guid));
    },
    async reloadCourseThreads(store, courseGuid) {
      const threads = await DiscussionThread.getMany();
      store.commit('SET_COURSE_THREAD_GUIDS', { courseGuid, threadGuids: threads.map(th => th.guid) });
    },
    async storeThreadComment(store, { comment, threadGuid, courseGuid }) {
      const obj = await Discussion.create({ body: comment, threadGuid });
      const thread = store.state.threadObjs[threadGuid];
      thread.comments__guids.unshift(obj.guid);
    },
    async storeNewPost(store, { post, courseGuid }) {
      const threadObj = await DiscussionThread.create({ body: post, courseGuid });
      if (courseGuid) {
        store.state.courseThreadGuids[courseGuid].unshift(threadObj.guid);
      } else {
        store.state.homeThreadGuids.unshift(threadObj.guid);
      }
    },
  },
  modules: {
  },
  getters: {
    homeThreads: state => state.homeThreadGuids.map(guid => state.threadObjs[guid]),
    courseThreads: state => {
      const courseThreads = _.clone(state.courseThreadGuids);
      for (const key in courseThreads) {
        courseThreads[key] = courseThreads[key].map(guid => state.threadObjs[guid]);
      }
      return courseThreads;
    },
  },
});
