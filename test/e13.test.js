import { it, describe, expect } from "vitest";
import { getDiffTwentySeven } from "../exercises/e13";

describe("getDiffTwentySeven", () => {
  it("The getDiffTwentySeven() function should exist", () => {
    expect(getDiffTwentySeven).instanceOf(Function);
  });
  it("Should return difference if less than 27", () => {
    const value = 13;
    expect(getDiffTwentySeven(value)).toEqual(14);
  });
  it("Should return difference if equal to 27", () => {
    const value = 27;
    expect(getDiffTwentySeven(value)).toEqual(0);
  });
  it("Should return absolute doubled difference if greater than 27", () => {
    const value = 37;
    expect(getDiffTwentySeven(value)).toEqual(20);
  });
});
