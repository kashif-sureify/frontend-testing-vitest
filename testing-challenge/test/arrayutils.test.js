import { describe, expect, it } from "vitest";
import {
  flatenArray,
  intersectArrays,
  removeDuplicates,
} from "../src/arrayUtils";

describe("arrayUtilities", () => {
  it("should return flatten nested array", () => {
    expect(flatenArray([1, [2, 3], [4, [5, 6]], 7])).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  it("should return intersection array", () => {
    expect(intersectArrays([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  it("should return unique element in array", () => {
    expect(removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5, 6, 6])).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
