import { Data } from '.';
import { fakeEnrollments } from './course';

import events from '../store/events';

import faker from 'faker';

class Event extends Data {
  get SCHEMA() {
    return {
      guid: String,
      metaTitle: String,
      title: String,
      subtitle: String,
      description: String,
      schedule: String,
    };
  }

  get vuexStore() {
    return events;
  }

  get vuexState() {
    return 'eventObjs';
  }

  get vuexMutation() {
    return 'ADD_EVENTS';
  }

  static getRecent() {
    return new Promise(resolve => {
      const objs = fakeEvents.map(ev => new Event(ev));
      resolve(objs);
    });
  }
}

const fakeEvents = [
  {
    guid: faker.random.uuid(),
    metaTitle: '',
    title: `${fakeEnrollments[1].code} Midterm`,
    description: '',
    schedule: faker.date.soon(),
  },
  {
    guid: faker.random.uuid(),
    metaTitle: `${fakeEnrollments[0].code} Midterm result published`,
    title: 'You Passed',
    description: 'with 78% score',
    schedule: '',
  },
  {
    guid: faker.random.uuid(),
    metaTitle: '',
    title: `${fakeEnrollments[2].code} Final`,
    description: '',
    schedule: faker.date.soon(),
  },
];

export {
  Event,
};
