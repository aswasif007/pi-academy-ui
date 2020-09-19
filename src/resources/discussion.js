import faker from 'faker';
import _ from 'lodash';
import { Data, DataList } from '.';
import { User, fakeUsers } from './user';
import discussions from '../store/discussions';
import users from '../store/users';


class Discussion extends Data {
  get SCHEMA() {
    return {
      guid: String,
      body: String,
      author: User,
      createdAt: Date,
    };
  }

  constructor(fields) {
    fields = {
      author: users.getters.currentUser,
      createdAt: new Date(),
      ...fields,
    };

    super(fields);
  }

  get vuexStore() {
    return discussions;
  }

  get vuexState() {
    return 'discussionObjs';
  }

  get vuexMutation() {
    return 'ADD_DISCUSSIONS';
  }

  static create({ body, threadGuid }) {
    const obj = new Discussion({ body });
    return new Promise(resolve => resolve(obj));
  }
}

class DiscussionList extends DataList {
  static get Type() {
    return Discussion;
  }
}

class DiscussionThread extends Data {
  get SCHEMA() {
    return {
      guid: String,
      post: Discussion,
      comments: DiscussionList,
    };
  }

  constructor(fields) {
    fields = {
      post: { body: '' },
      comments: [],
      ...fields,
    };

    super(fields);
  }

  get vuexStore() {
    return discussions;
  }

  get vuexState() {
    return 'threadObjs';
  }

  get vuexMutation() {
    return 'ADD_THREADS';
  }

  static getMany() {
    return new Promise(resolve => {
      const threadObjs = fakeDiscussionThreads.map(th => new DiscussionThread(th));
      resolve(threadObjs);
    });
  }

  static create({ body, courseGuid }) {
    return new Promise(resolve => {
      const threadObj = new DiscussionThread({ post: { body }});
      resolve(threadObj);
    });
  }
}

const fakeDiscussions = [
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[0],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[1],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[2],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[3],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[0],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[0],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[1],
    createdAt: faker.date.recent(),
  },
  {
    guid: faker.random.uuid(),
    body: faker.lorem.paragraph(),
    author: fakeUsers[2],
    createdAt: faker.date.recent(),
  },
];

const fakeDiscussionThreads = [
  {
    guid: fakeDiscussions[0].guid,
    post: fakeDiscussions[0],
    comments: [fakeDiscussions[3], fakeDiscussions[2]],
  },
  {
    guid: fakeDiscussions[1].guid,
    post: fakeDiscussions[2],
    comments: [fakeDiscussions[5], fakeDiscussions[4]],
  },
  {
    guid: fakeDiscussions[2].guid,
    post: fakeDiscussions[2],
    comments: [fakeDiscussions[6], fakeDiscussions[7]],
  }
];

export { Discussion, DiscussionThread, fakeDiscussions, fakeDiscussionThreads };
