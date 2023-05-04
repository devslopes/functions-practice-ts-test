import { it, describe, expect } from 'vitest';
import { rectArea } from '../exercises/e5';

describe('rectArea', () => {
  it('The test function should exist', () => {
    expect(rectArea).instanceOf(Function);
  });
  it('The value from the final test function should return 83', () => {
    const sides = {
      sideA: 5,
      sideB: 6
    };
    expect(rectArea(sides)).toEqual(sides.sideA * sides.sideB);
  });
});
