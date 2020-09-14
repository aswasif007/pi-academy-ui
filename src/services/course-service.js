function getEnrolledCourses() {
  return new Promise(resolve => resolve(courses));
}

function getAllCourses() {
  return new Promise(resolve => resolve(allCourses));
}
export {
  getEnrolledCourses,
  getAllCourses,
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
