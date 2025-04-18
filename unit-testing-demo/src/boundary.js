export const validatePassword = (password) => {
  if (password.length < 8 || password.length > 16) {
    throw new Error("Password must be between 8 and 16 characters");
  }

  return "Password is valid";
};

export const isValidIndex = (array, index) => {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }

  return "Index is valid!";
};
