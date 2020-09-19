function getObjFromArray(arr, key = 'guid') {
  const obj = {};
  arr.forEach(entry => obj[entry[key]] = entry);
  return obj;
}

export {
  getObjFromArray,
};
