import { Data } from '.';
import faker from 'faker';
import users from '../store/users';

import _ from 'lodash';

class User extends Data {
  get SCHEMA() {
    return {
      guid: String,
      username: String,
      name: String,
      email: String,
      category: String,
      avatar: String,
    };
  };

  get vuexStore() {
    return users;
  }

  get vuexState() {
    return 'userObjs';
  }

  get vuexMutation() {
    return 'ADD_USERS';
  }

  static getCurrentUser() {
    return new Promise(resolve => {
      const user = new User(fakeUsers[0]);
      this.prototype.vuexStore.commit('SET_CURRENT_USER_GUID', user.guid);
      resolve(user);
    });
  }
}


class UserProfile extends Data {
  get SCHEMA() {
    return {
      guid: String,
      bio: String,
      interests: String,
      achievements: Array,
    };
  };

  get vuexStore() {
    return users;
  }

  get vuexState() {
    return 'userProfileObjs';
  }

  get vuexMutation() {
    return 'ADD_USER_PROFILES';
  }

  static getOne(guid) {
    return new Promise(resolve => {
      const profile = new UserProfile(_.find(fakeProfiles, { guid }));
      resolve(profile);
    });
  }
};

const fakeUsers = [
  {
    guid: faker.random.uuid(),
    username: faker.internet.userName(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    category: 'Professor',
  },
  {
    guid: faker.random.uuid(),
    username: faker.internet.userName(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    category: 'Professor',
  },
  {
    guid: faker.random.uuid(),
    username: faker.internet.userName(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    category: 'Professor',
  },
  {
    guid: faker.random.uuid(),
    username: faker.internet.userName(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    category: 'Professor',
  }
];

const fakeProfiles = [
  {
    guid: fakeUsers[0].guid,
    bio: faker.lorem.paragraph(),
    interests: 'CS, UI, PWA',
    achievements: [
      'CS-101',
      'CS-102',
      'UI-101',
    ],
  },
  {
    guid: fakeUsers[1].guid,
    bio: faker.lorem.paragraph(),
    interests: 'CS, UX, Web',
    achievements: [
      'CS-101',
      'CS-102',
      'UI-101',
    ],
  },
  {
    guid: fakeUsers[2].guid,
    bio: faker.lorem.paragraph(),
    interests: 'UI, Android',
    achievements: [
      'CS-121',
      'CS-112',
      'UI-101',
    ],
  },
  {
    guid: fakeUsers[3].guid,
    bio: faker.lorem.paragraph(),
    interests: 'CS, UI, PWA',
    achievements: [
      'CS-101',
      'CS-102',
      'UI-101',
    ],
  },
];

export { User, UserProfile, fakeUsers, fakeProfiles };
