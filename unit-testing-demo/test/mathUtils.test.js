import { describe, expect, it, test } from "vitest";
import { add, divide, multiply, subtract } from "../src/mathUtils";

// describe: Groups related tests together.

// it/test: Defines an individual test case.

// expect: Used to write assertions (i.e., check if values match expectations).
describe("Math Utilities", () => {
  it("should sum two numbers", () => {
    expect(add(2, 4)).toBe(6);
    expect(add(-1, 1)).toBe(0);
  });

  test("should subtract two numbers", () => {
    expect(subtract(4, 4)).toBe(0);
    expect(subtract(-10, 1)).toBe(-11);
    expect(subtract(10, -1)).toBe(11);
  });

  it("should multiply two numbers", () => {
    expect(multiply(3, 9)).toBe(27);
    expect(multiply(-6, 3)).toBe(-18);
  });

  it("should divide two numbers", () => {
    expect(divide(9, 3)).toBe(3);
    expect(divide(9, 2)).toBe(4.5);
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  it("should throw new error when dividing by zero", () => {
    expect(() => divide(9, 0)).toThrow("Divison by zero is not allowed");
  });
});
