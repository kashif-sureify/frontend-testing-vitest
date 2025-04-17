export const flatenArray = (arr) => {
  return arr.reduce(
    (acc, curr) =>
      Array.isArray(curr) ? acc.concat(flatenArray(curr)) : acc.concat(curr),
    []
  );
};

export const intersectArrays = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

export const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
