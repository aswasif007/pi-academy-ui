function getRecentEvents() {
  return new Promise(resolve => resolve(recentEvents));
}

export {
  getRecentEvents,
};

const recentEvents = [
  {
    guid: 'eaac12',
    metaTitle: '',
    title: 'CS-102 Midterm',
    description: '',
    datetime: new Date(2020, 9, 29),
  },
  {
    guid: 'eaac13',
    metaTitle: '',
    title: 'UI-102 Midterm',
    description: '',
    datetime: new Date(2020, 10, 1),
  },
  {
    guid: 'eaac14',
    metaTitle: 'UI-102 Midterm result published',
    title: 'You Passed',
    description: 'with 78% score',
    datetime: '',
  },
];
