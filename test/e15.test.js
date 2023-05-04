import { it, describe, expect } from "vitest";
import { isOneOfThemOrTheirSumForty } from "../exercises/e15";

describe("isOneOfThemOrTheirSumIsForty", () => {
  it("The isOneOfThemOrTheirSumIsForty() function should exist", () => {
    expect(isOneOfThemOrTheirSumForty).instanceOf(Function);
  });
  it("Should return true if the first one is 40", () => {
    const data = {
      num1: 40,
      num2: 13,
    };
    expect(isOneOfThemOrTheirSumForty(data)).toEqual(true);
  });
  it("Should return true if the second one is 40", () => {
    const data = {
      num1: 13,
      num2: 40,
    };
    expect(isOneOfThemOrTheirSumForty(data)).toEqual(true);
  });
  it("Should return true the sum is 40", () => {
    const data = {
      num1: 22,
      num2: 18,
    };
    expect(isOneOfThemOrTheirSumForty(data)).toEqual(true);
  });
  it("Should return true if both are 40", () => {
    const data = {
      num1: 40,
      num2: 40,
    };
    expect(isOneOfThemOrTheirSumForty(data)).toEqual(true);
  });
  it("Should false if neither of the or their sum are 40", () => {
    const data = {
      num1: 23,
      num2: 16,
    };
    expect(isOneOfThemOrTheirSumForty(data)).toEqual(false);
  });
});
