import { describe, expect, it } from "vitest";
import { fetchUserData } from "../src/asynctrycatch";

describe("fetchUserData", () => {
  it("should resolve with the user data when the userId is valid", async () => {
    const result = await fetchUserData("validUserId");
    expect(result).toEqual({ id: "validUserId", name: "Kashif" });
  });

  it("should catch an error when the userId is invalid", async () => {
    try {
      await fetchUserData("invalid");
    } catch (error) {
      expect(error).toBe("User not found");
    }
  });
});
