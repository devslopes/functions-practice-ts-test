import { it, describe, expect } from "vitest";
import { isNameInArray } from "../exercises/e11";

describe("isNameInArray", () => {
  it("The function should exist", () => {
    expect(isNameInArray).instanceOf(Function);
  });

  it("Should return the value of the age property of the object passed", () => {
    const arr = ["Jon", "Michael", "Andrey"];
    expect(isNameInArray(arr, "Michael")).toEqual(true);
    expect(isNameInArray(arr, "James")).toEqual(false);
  });

  it("Must be refactored using arrow function syntax", () => {
    expect(!("prototype" in isNameInArray)).toEqual(true);
  });
});
