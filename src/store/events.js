import Vue from 'vue';
import Vuex from 'vuex';
import { getRecentEvents } from '../services/event-service';

import { Event } from '../resources/event';
import { getObjFromArray } from '../utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recentEventGuids: [],
    eventObjs: {},
  },
  mutations: {
    ADD_EVENTS(state, events) {
      state.eventObjs = {...state.eventObjs, ...getObjFromArray(events, 'guid')};
    },
    SET_RECENT_EVENT_GUIDS(state, guids) {
      state.recentEventGuids = guids;
    },
  },
  actions: {
    async reloadRecentEvents(store) {
      const objs = await Event.getRecent();
      store.commit('SET_RECENT_EVENT_GUIDS', objs.map(ob => ob.guid));
    },
  },
  modules: {
  },
  getters: {
    recentEvents: state => {
      const events = state.recentEventGuids.map(guid => state.eventObjs[guid]);
      return events;
    },
  },
});
