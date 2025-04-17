export const deepMerge = (obj1, obj2) => {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (obj2[key] instanceof Object && key in obj1) {
      result[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const flatenObject = (obj, prefix = "") => {
  let result = {};

  for (const key in obj) {
    const newkey = prefix ? `${prefix}.${key}` : key;

    if (obj[key] && typeof obj[key] === "object") {
      result = { ...result, ...flatenObject(obj[key], newkey) };
    } else {
      result[newkey] = obj[key];
    }
  }

  return result;
};
