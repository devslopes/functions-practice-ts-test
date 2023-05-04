import { it, describe, expect } from "vitest";
import { doesArrayIncludeItemsBetweenVals } from "../exercises/e7";

describe("doesArrayIncludeItemBetweenVals", () => {
  it("The final test function should exist", () => {
    expect(doesArrayIncludeItemsBetweenVals).instanceOf(Function);
  });

  it("Should return correct values", () => {
    const arr = [45, 62, 3, 21, 7, 19, 59, 22, 34, 87];
    const case1 = {
      arr,
      val1: 18,
      val2: 21,
    };
    const case2 = {
      arr,
      val1: 19,
      val2: 21,
    };
    expect(doesArrayIncludeItemsBetweenVals(case1)).toEqual(true);
    expect(doesArrayIncludeItemsBetweenVals(case2)).toEqual(false);
  });
});
