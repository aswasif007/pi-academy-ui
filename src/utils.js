function getObjFromArray(arr, key) {
  const obj = {};
  arr.forEach(entry => obj[entry[key]] = entry);
  return obj;
}

export {
  getObjFromArray,
};
