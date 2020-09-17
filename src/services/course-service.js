function getEnrolledCourses() {
  return new Promise(resolve => resolve(courses));
}

function getAllCourses() {
  return new Promise(resolve => resolve(allCourses));
}

function getCourseMeta(courseGuid) {
  return new Promise(resolve => resolve(courseMeta[courseGuid]));
}

export {
  getEnrolledCourses,
  getAllCourses,
  getCourseMeta,
};

const courses = [
  {
    code: 'CS-101',
    title: 'Introduction to CS',
    guid: 'e1c42',
  },
  {
    code: 'UI-403',
    title: 'Advanced UI Techniques',
    guid: 'e1c41',
  }
];

const allCourses = [
  {
    code: 'CS-101',
    title: 'Introduction to CS',
    guid: 'e1c42',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    takeaways: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      'consectetur adipiscing elit Ut enim ad minim veniam.',
    ],
    outlines: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'Ut enim ad minim veniam',
    ],
    tags: [
      'CS',
      'Py',
    ],
  },
  {
    code: 'UI-101',
    title: 'Introduction to UI',
    guid: 'e1c41',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    takeaways: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      'consectetur adipiscing elit Ut enim ad minim veniam.',
    ],
    outlines: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'Ut enim ad minim veniam',
    ],
    tags: [
      'CS',
      'Py',
    ],
  },
];

const courseMeta = {
  'e1c41': {
    code: 'UI-101',
    title: 'Introduction to UI',
    guid: 'e1c41',
    status: 'open',
    members: [],
    instructors: [
      { guid: 'abc20', category: 'Curator', name: 'Jane Foe'},
    ]
  },
  'e1c42': {
    code: 'CS-102',
    title: 'Introduction to CS',
    guid: 'e1c42',
    status: 'closed',
    members: [
      { guid: 'abc12', category: 'Student', name: 'Bob Fisher'},
      { guid: 'abc13', category: 'Student', name: 'Bob Fisher'},
      { guid: 'abc14', category: 'Student', name: 'Bob Fisher'},
      { guid: 'abc15', category: 'Student', name: 'Bob Fisher'},
      { guid: 'abc16', category: 'Student', name: 'Bob Fisher'},
      { guid: 'abc17', category: 'Student', name: 'Bob Fisher'},
      { guid: 'abc18', category: 'Professor', name: 'Dave Fisher'},
      { guid: 'abc19', category: 'Professor', name: 'Cave Fisher'},
      { guid: 'abc20', category: 'Curator', name: 'Jane Foe'},
    ],
    instructors: [
      { guid: 'abc18', category: 'Professor', name: 'Dave Fisher'},
      { guid: 'abc19', category: 'Professor', name: 'Cave Fisher'},
      { guid: 'abc20', category: 'Curator', name: 'Jane Foe'},
    ]
  }
};
