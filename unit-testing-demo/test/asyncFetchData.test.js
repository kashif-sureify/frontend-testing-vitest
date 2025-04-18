import { describe, expect, it } from "vitest";
import { fetchdata, fetchUserData } from "../src/asyncFetchData";

describe("fetchData", () => {
  it("should return the correct result after the promise resolves", async () => {
    const result = await fetchdata();

    expect(result).toBe("Data fetched successfully");
  });
});

describe("fetchUserData", () => {
  it("should resolve with the user data when the userId is valid", async () => {
    const result = await fetchUserData("validUserId");

    expect(result).toEqual({ id: "validUserId", name: "Kashif" });
  });

  it("should reject with the user data when the userId is invalid", async () => {
    await expect(fetchUserData("invalid")).rejects.toBe("User not found");
  });
});
