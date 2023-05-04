import { it, describe, expect, beforeEach, vitest } from "vitest";
import { logSecondsUpToMax } from "../exercises/e12";

describe("logSecondsUpToMax", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    vitest.clearAllTimers();
    vitest.useFakeTimers();
  });

  it("The test function should exist", () => {
    expect(logSecondsUpToMax).instanceOf(Function);
  });

  it("The function will log each number 1 - 10 each second", () => {
    const logSpy = vitest.spyOn(console, "log");
    const max = 10;
    logSecondsUpToMax(max);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(1);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(2);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(3);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(4);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(5);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(6);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(7);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(8);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(9);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(10);
  });

  it("The function will not log 11 after 11 seconds", () => {
    const logSpy = vitest.spyOn(console, "log");
    const max = 10;
    logSecondsUpToMax(max);
    vitest.advanceTimersByTime(1000 * 11); // advance by 10 seconds
    expect(logSpy).not.toHaveBeenCalledWith(11);
  });

  it("The function clears the interval", () => {
    // eslint-disable-next-line no-undef
    const clearInterval = vitest.spyOn(global, "clearInterval");
    let max = 10;
    logSecondsUpToMax(max);
    vitest.advanceTimersByTime(1000 * 10 + 100000);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });

  it("Must be refactored using arrow function syntax", () => {
    expect(!("prototype" in logSecondsUpToMax)).toEqual(true);
  });
});
