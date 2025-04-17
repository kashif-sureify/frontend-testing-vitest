import { describe, expect, it } from "vitest";
import { deepClone, deepMerge, flatenObject } from "../src/objectUtils";

describe("objectUtilities", () => {
  it("should return deep nested object", () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { d: { e: 4 }, f: 5 };

    const obj3 = { ...obj1, ...obj2 };

    expect(deepMerge(obj1, obj2)).toEqual(obj3);
  });

  it("should return deep cloned object", () => {
    const obj = { a: 1, b: { c: 3 } };

    const result = { ...obj };

    expect(deepClone(obj)).toEqual(result);
    expect(deepClone(obj)).not.toBe(obj);
  });

  it("should return flaten object", () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };

    expect(flatenObject(obj)).toEqual({ a: 1, "b.c": 2, "b.d.e": 3 });
  });
});
