export const fetchdata = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
};

export const fetchUserData = async (userId) => {
  if (userId === "invalid") {
    return Promise.reject("User not found");
  }

  return Promise.resolve({ id: userId, name: "Kashif" });
};
