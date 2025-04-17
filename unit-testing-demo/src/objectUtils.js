export const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const deepEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
