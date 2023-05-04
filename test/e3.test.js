import { vitest, it, describe, expect } from "vitest";
import { logMessageWithMyName } from "../exercises/e3";

describe("logMessageWithMyName", () => {
  it("The test function should exist", () => {
    expect(logMessageWithMyName).instanceOf(Function);
  });

  it("The function logs a message using the argument passed", () => {
    const nameOne = "Sarah";
    const nameTwo = "Dan";
    const logSpy = vitest.spyOn(console, "log");
    logMessageWithMyName(nameOne);
    logMessageWithMyName(nameTwo);
    expect(logSpy).toBeCalledWith(`My name is ${nameOne}!`);
    expect(logSpy).toHaveBeenLastCalledWith(`My name is ${nameTwo}!`);
  });

  it("The function returns undefined", async () => {
    const nameOne = "Phillip";
    expect(logMessageWithMyName(nameOne)).toEqual(undefined);
  });
});
