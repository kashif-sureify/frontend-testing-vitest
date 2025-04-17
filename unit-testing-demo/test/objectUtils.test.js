import { describe, expect, it } from "vitest";
import { deepClone, deepEqual, mergeObjects } from "../src/objectUtils";

describe("objectUtilities", () => {
  it("should return a two merged object", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it("should return a deep cloned object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    cloned.b.c = 3;
    expect(original.b.c).toBe(2);
    expect(cloned.b.c).toBe(3);
  });

  it("should check a deep cloned or not", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, d: 3 };

    expect(deepEqual(obj1, obj2)).toBe(true);

    expect(deepEqual(obj1, obj3)).toBe(false);
  });
});
