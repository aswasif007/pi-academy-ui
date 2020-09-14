function getEnrolledCourses() {
  return new Promise(resolve => resolve(courses));
}

export {
  getEnrolledCourses,
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
