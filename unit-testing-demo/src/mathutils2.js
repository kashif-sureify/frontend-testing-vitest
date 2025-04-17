export const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both the arguments should be numbers");
  }
  return a + b;
};
