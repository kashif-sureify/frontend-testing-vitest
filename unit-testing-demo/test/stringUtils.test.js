import { describe, expect, it } from "vitest";
import {
  capitalize,
  reverse,
  toLowerCase,
  toUpperCase,
} from "../src/stringUtils";
describe("stringUtilities", () => {
  it("should return string in upperCase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  it("should return string in lowercase", () => {
    expect(toLowerCase("heLlO")).toBe("hello");
  });

  it("should return string in capitalize", () => {
    expect(capitalize("heLlO")).toBe("Hello");
  });

  it("should return string in reversed", () => {
    expect(reverse("hello")).toBe("olleh");
  });
});
