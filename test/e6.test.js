import { it, describe, expect } from "vitest";
import { totalRoomsArea } from "../exercises/e6";
import { rectArea } from "../exercises/e5";

describe("totalRoomsArea", () => {
  it("The test function should exist", () => {
    expect(totalRoomsArea).instanceOf(Function);
  });

  it("Should return 102 for 3*15, 11*6, 3*7", () => {
    const room1 = {
      sideA: 5,
      sideB: 3,
    };
    const room2 = {
      sideA: 11,
      sideB: 6,
    };
    const room3 = {
      sideA: 3,
      sideB: 7,
    };

    const room1Area = rectArea(room1);
    const room2Area = rectArea(room2);
    const room3Area = rectArea(room3);

    expect(
      totalRoomsArea({
        room1: room1Area,
        room2: room2Area,
        room3: room3Area,
      })
    ).toEqual(102);
  });

  it("Should return 276 for 9*16, 8*12, 9*4", () => {
    const room1 = {
      sideA: 9,
      sideB: 16,
    };
    const room2 = {
      sideA: 8,
      sideB: 12,
    };
    const room3 = {
      sideA: 9,
      sideB: 4,
    };
    const room1Area = rectArea(room1);
    const room2Area = rectArea(room2);
    const room3Area = rectArea(room3);

    expect(
      totalRoomsArea({
        room1: room1Area,
        room2: room2Area,
        room3: room3Area,
      })
    ).toEqual(276);
  });
});
