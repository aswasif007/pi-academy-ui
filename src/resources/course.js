import { Data } from '.';
import faker from 'faker';
import { UserList, fakeUsers } from './user';
import courses from '../store/courses';
import _ from 'lodash';

class Course extends Data {
  get SCHEMA() {
    return {
      guid: String,
      code: String,
      title: String,
      description: String,
      takeaways: Array,
      outlines: Array,
      tags: Array,
    };
  }

  get vuexStore() {
    return courses;
  }

  get vuexState() {
    return 'courseObjs';
  }

  get vuexMutation() {
    return 'ADD_COURSES';
  }

  static getMany() {
    return new Promise(resolve => {
      const objs = fakeCourses.map(course => new Course(course));
      resolve(objs);
    });
  }
}

class Enrollment extends Data {
  get SCHEMA() {
    return {
      guid: String,
      code: String,
      title: String,
    };
  }

  get vuexStore() {
    return courses;
  }

  get vuexState() {
    return 'enrollmentObjs';
  }

  get vuexMutation() {
    return 'ADD_ENROLLMENTS';
  }

  static getMany() {
    return new Promise(resolve => {
      const objs = fakeEnrollments.map(enr => new Enrollment(enr));
      console.log(objs);
      resolve(objs);
    });
  }
}

class EnrollmentMeta extends Data {
  get SCHEMA() {
    return {
      guid: String,
      status: String,
      instructors: UserList,
      members: UserList,
      enrollment: Enrollment,
    };
  }

  get vuexStore() {
    return courses;
  }

  get vuexState() {
    return 'enrollmentMetaObjs';
  }

  get vuexMutation() {
    return 'ADD_ENROLLMENT_META';
  }

  static getOne(guid) {
    return new Promise(resolve => {
      const obj = new EnrollmentMeta(_.find(fakeEnrollmentDetails, { guid }));
      resolve(obj);
    });
  }
};


const fakeCourses = [
  {
    code: `${faker.lorem.word(3).toUpperCase()}-${faker.random.number(500)}`,
    title: faker.lorem.sentence(),
    guid: 'fa0db952-096f-4d05-8161-d7448d965e21',
    description: faker.lorem.paragraph(),
    takeaways: [
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    ],
    outlines: [
      faker.lorem.words(),
      faker.lorem.words(),
      faker.lorem.words(),
    ],
    tags: [
      faker.lorem.word().toUpperCase(),
      faker.lorem.word().toUpperCase()
    ],
  },
  {
    code: `${faker.lorem.word(3).toUpperCase()}-${faker.random.number(500)}`,
    title: faker.lorem.sentence(),
    guid: 'fa0db952-096f-4d05-8161-d7448d965e25',
    description: faker.lorem.paragraph(),
    takeaways: [
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    ],
    outlines: [
      faker.lorem.words(),
      faker.lorem.words(),
    ],
    tags: [
      faker.lorem.word().toUpperCase(),
      faker.lorem.word().toUpperCase(),
      faker.lorem.word().toUpperCase()
    ],
  },
  {
    code: `${faker.lorem.word(3).toUpperCase()}-${faker.random.number(500)}`,
    title: faker.lorem.sentence(),
    guid: 'fa0db952-096f-4d05-8161-d7448d945e21',
    description: faker.lorem.paragraph(),
    takeaways: [
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    ],
    outlines: [
      faker.lorem.words(),
      faker.lorem.words(),
      faker.lorem.words(),
    ],
    tags: [
      faker.lorem.word().toUpperCase(),
      faker.lorem.word().toUpperCase()
    ],
  },
  {
    code: `${faker.lorem.word(3).toUpperCase()}-${faker.random.number(500)}`,
    title: faker.lorem.sentence(),
    guid: 'fa0db952-096f-4d05-8561-d7448d965e21',
    description: faker.lorem.paragraph(),
    takeaways: [
      faker.lorem.sentence(),
    ],
    outlines: [
      faker.lorem.words(),
    ],
    tags: [
      faker.lorem.word().toUpperCase(),
      faker.lorem.word().toUpperCase()
    ],
  },
  {
    code: `${faker.lorem.word(3).toUpperCase()}-${faker.random.number(500)}`,
    title: faker.lorem.sentence(),
    guid: 'fa0d9952-096f-4d05-8161-d7448d965e21',
    description: faker.lorem.paragraph(),
    takeaways: [
      faker.lorem.sentence(),
    ],
    outlines: [
      faker.lorem.words(),
    ],
    tags: [
      faker.lorem.word().toUpperCase(),
      faker.lorem.word().toUpperCase()
    ],
  },
];

const fakeEnrollments = [
  _.pick(fakeCourses[1], ['guid', 'code', 'title']),
  _.pick(fakeCourses[4], ['guid', 'code', 'title']),
  _.pick(fakeCourses[3], ['guid', 'code', 'title']),
];

const fakeEnrollmentDetails = [
  {
    guid: fakeEnrollments[0].guid,
    status: 'closed',
    instructors: [fakeUsers[0], fakeUsers[1]],
    members: fakeUsers,
    enrollment: fakeEnrollments[0],
  },
  {
    guid: fakeEnrollments[1].guid,
    status: 'open',
    instructors: [fakeUsers[1], fakeUsers[2]],
    members: _.takeRight(fakeUsers, 5),
    enrollment: fakeEnrollments[1],
  },
  {
    guid: fakeEnrollments[2].guid,
    status: 'open',
    instructors: [fakeUsers[0], fakeUsers[1], fakeUsers[2], fakeUsers[3]],
    members: _.takeRight(fakeUsers, 2),
    enrollment: fakeEnrollments[2],
  },
];

export {
  Course,
  Enrollment,
  EnrollmentMeta,
};
