import { describe, expect, it, test } from "vitest";
import { factorial, fibonacci, gcd } from "../src/mathUtils";

describe("Math Utilities", () => {
  it("should factorial of a number", () => {
    expect(factorial(4)).toBe(24);
    expect(factorial(0)).toBe(1);

    expect(() => factorial(-1)).toThrow("Number must be non-negative");
  });

  it("should gcd of two numbers", () => {
    expect(gcd(4, 2)).toBe(2);
    expect(gcd(98, 56)).toBe(14);
  });

  it("should fibonacci series ", () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });
});
