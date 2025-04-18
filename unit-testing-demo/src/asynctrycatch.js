export const fetchUserData = async (userId) => {
  try {
    if (userId === "invalid") {
      throw "User not found";
    }

    return { id: userId, name: "Kashif" };
  } catch (error) {
    // Optional: log error or add custom handling here
    throw error; // re-throw so the caller (like a test) can catch it
  }
};
