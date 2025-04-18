import { describe, expect, it } from "vitest";
import { sum } from "../src/mathutils2";

describe("checking positive and negative testing case", () => {
  it("positive testing: should return valid inputs", () => {
    expect(sum(3, 5)).toBe(8);
  });

  it("negative testing: should return invalid inputs", () => {
    expect(() => sum(3, "5")).toThrowError(
      "Both the arguments should be numbers"
    );
    expect(() => sum("a", 5)).toThrow("Both the arguments should be numbers");

    expect(() => sum(undefined, null)).toThrowError(
      "Both the arguments should be numbers"
    );
  });
});
