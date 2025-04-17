import { it, expect } from "vitest";

// toBe: check for strict equality, ===, meaning both values must be the same type and value
// toEqual: check for deep equality: it compares the values by checking the content of objects or arrays, not just their refrences
it("toBe matcher", () => {
  const result = 5; // fails if const result="5"

  expect(result).toBe(5);
});

it("toEqual matcher", () => {
  const obj1 = { name: "Kashif", age: 22 };
  const obj2 = { name: "Kashif", age: 22 };

  expect(obj1).toEqual(obj2);
});
