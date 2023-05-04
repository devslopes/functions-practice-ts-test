import { vitest, it, describe, expect } from "vitest";
import { logMessage } from "../exercises/e1";

describe("logMessage", () => {
  it("The test function should exist", () => {
    expect(logMessage).instanceOf(Function);
  });

  it("The function logs a message in console", async () => {
    const logSpy = vitest.spyOn(console, "log");
    logMessage();
    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Hello, World!");
  });

  it("The function returns undefined", async () => {
    expect(logMessage()).toEqual(undefined);
  });
});
