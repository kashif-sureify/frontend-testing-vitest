import { describe, expect, it, test } from "vitest";
import { sum } from "../src/mathutils2";

describe("Math utilites using TDD", () => {
  it("should return sum of two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return an error", () => {
    expect(() => sum(2, "3")).toThrow("Both the arguments should be numbers");
    expect(() => sum("2", 3)).toThrow("Both the arguments should be numbers");
    expect(() => sum(null, "3")).toThrow(
      "Both the arguments should be numbers"
    );
  });
});
