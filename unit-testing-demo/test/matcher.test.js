import { it, expect } from "vitest";

// toBe: check for strict equality, ===, meaning both values must be the same type and value
// toEqual: check for deep equality: it compares the values by checking the content of objects or arrays, not just their refrences
// toStrictEqual: check for deep equality just like toEqual(), but also consider properties like undefined, functions, and other types that are not strict equal in certain cases

// toBeTruthy: check whether value is truthy or falsy, everything in js is true except some are as follows
// false, 0, null, '', "", ``, undefined, NaN
it("toBe matcher", () => {
  const result = 5; // fails if const result="5"

  expect(result).toBe(5);
});

it("toEqual matcher", () => {
  const obj1 = { name: "Kashif", age: 22 };
  const obj2 = { name: "Kashif", age: 22 };

  expect(obj1).toEqual(obj2);
});

it("toStrictEqual matcher", () => {
  const obj1 = { name: "Kashif", age: 22 };
  const obj2 = { name: "Kashif", age: "22" };
  const obj3 = { name: "Kashif", age: 22, city: "Jamshedpur" };

  // expect(obj1).toStrictEqual(obj2);   fails
  // expect(obj1).toStrictEqual(obj3);  fails
});

it("toBeTruthy matcher", () => {
  const value = 1;
  const value2 = null;
  expect(value).toBeTruthy(); // pass only if true
  // expect(value2).toBeTruthy(); fail because it is falsy
});

it("toBeFalsy matcher", () => {
  const value = 1;
  const value2 = null;
  // expect(value).toBeFalsy(); // fails because it is  falsy
  expect(value2).toBeFalsy(); //pass because it is falsy, pass only falsy value
});

it("comaprison of value matcher", () => {
  const result = 5;
  const value = "Hello, world";
  const obj = { name: "Kashif", age: 22 };
  expect(result).toBeLessThan(10);
  expect(result).toBeGreaterThan(3);
  expect(value).toContain("Hello");
  expect(value).toMatch(/world/); // toMatch() takes regex
  expect(obj).toHaveProperty("name"); // toHaveProperty() takes objects key to check
  //  expect(obj).toHaveProperty("city"); // toHaveProperty() takes objects key to check
  expect(obj.name).toBeDefined();
});
