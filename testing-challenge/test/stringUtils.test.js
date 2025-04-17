import { describe, expect, it } from "vitest";
import {
  capitalizeWords,
  isPalindrome,
  reverseString,
} from "../src/stringUtils";

describe("stringUtilities", () => {
  it("should return string in reversed", () => {
    expect(reverseString("hello, kashif")).toBe("fihsak ,olleh");
  });

  it("should return string in capitailzed Words", () => {
    expect(capitalizeWords("hello, kashif")).toBe("Hello, Kashif");
  });

  it("should return string is palindrome or not", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("kashif")).toBe(false);

  });
});
