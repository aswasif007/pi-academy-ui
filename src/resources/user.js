import Data from '.';
import faker from 'faker';
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

  static getCurrentUser() {
    return new Promise(resolve => resolve(new User(fakeUsers[0])));
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
