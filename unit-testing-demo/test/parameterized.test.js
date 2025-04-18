import { describe, expect, it } from "vitest";
import { isValidStringLength, multiply } from "../src/parameterized";

describe("parameterized testing: multiply function", () => {
  it.each([
    [2, 3, 6], //2,3 are multiplicant and 6 is product
    [4, 5, 20],
    [7, 8, 56],
    [2, -3, -6],
    [1, 0, 0],
  ])(
    "should return correct result when multipling %d and %d (expected: %d)",
    (a, b, product) => {
      expect(multiply(a, b)).toBe(product);
    }
  );
});

describe("parameterized testing: isValidString", () => {
  it.each(["kashif", "irfanAnsa", "wasimkhan", "hidaya"])(
    "should return validate string: %s",
    (string) => {
      expect(isValidStringLength(string)).toBe("String is valid");
    }
  );

  it.each(["aman", "zoya", "zoha", "khan"])(
    "should return invalidate string: %s",
    (string) => {
      expect(() => isValidStringLength(string)).toThrow(
        "String length must be between 5 and 10 characters"
      );
    }
  );
});
