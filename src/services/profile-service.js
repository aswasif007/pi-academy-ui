function getUserProfile(userGuid) {
  return new Promise(resolve => resolve(profile));
}

export {
  getUserProfile,
};

const profile = {
  guid: '2e1ca4',
  name: 'John Doe Jr.',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  interests: 'CS, UI, PWA',
  achievements: [
    'CS-101',
    'CS-102',
    'UI-101',
  ],
  email: 'john.doe.jr@email.com',
  category: 'Professor',
};
