import { describe, expect, it } from "vitest";
import { filterEven, findMax, findMin, sum } from "../src/arrayUtils";

describe("arrayUtilities", () => {
  it("should return a sum of numbers in array", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("should return a max number from array", () => {
    expect(findMax([1, 2, 3, 4])).toBe(4);
  });
  it("should return a min number from array", () => {
    expect(findMin([1, 2, 3, 4])).toBe(1);
  });
  it("should return a even numbers in array", () => {
    expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
  });
});
