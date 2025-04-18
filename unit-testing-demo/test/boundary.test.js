import { describe, expect, it } from "vitest";
import { isValidIndex, validatePassword } from "../src/boundary";

describe("boundary testing:validate password", () => {
  it("should allow a password exactly 8 characters", () => {
    const result = validatePassword("abcdefgh");

    expect(result).toBe("Password is valid");
  });

  it("it should throw an error if password is less than 8 characters", () => {
    expect(() => validatePassword("abcdef")).toThrow(
      "Password must be between 8 and 16 characters"
    );
  });

  it("should allow a password exactly 16 characters", () => {
    const result = validatePassword("abcdefghijklmnop");

    expect(result).toBe("Password is valid");
  });

  it("it should throw an error if password is more than 16 characters", () => {
    expect(() => validatePassword("abcdefghijklmnopqrst")).toThrow(
      "Password must be between 8 and 16 characters"
    );
  });
});

describe("boundary testing:isValidIndex", () => {
  it("should allow a index 0 (first element)", () => {
    const arr = [10, 20, 30, 40, 50];
    const result = isValidIndex(arr, 0);

    expect(result).toBe("Index is valid!");
  });

  it("should allow a index 4 (last element)", () => {
    const arr = [10, 20, 30, 40, 50];
    const result = isValidIndex(arr, 4);

    expect(result).toBe("Index is valid!");
  });

  it("should throw an error for index -1(out of bounds)", () => {
    const arr = [10, 20, 30, 40, 50];

    expect(() => isValidIndex(arr, -1)).toThrow("Index out of bounds");
  });

  it("should throw an error for index 5(out of bounds)", () => {
    const arr = [10, 20, 30, 40, 50];

    expect(() => isValidIndex(arr, 5)).toThrow("Index out of bounds");
  });
});
