function getCurrentUser() {
  return new Promise(resolve => resolve(user));
}

export {
  getCurrentUser,
};

const user = {
  id: '2e1ca4',
  name: 'John Doe Jr.',
  category: 'Professor',
};
