import { it, describe, expect } from 'vitest';
import { sumOfTwoIntegers } from '../exercises/e14';

describe('sumOfTwoIntegers', () => {
  it('The sumOfTwoIntegers() function should exist', () => {
    expect(sumOfTwoIntegers).instanceOf(Function);
  });
  it('Should return sum if not equal to each other', () => {
    const data = {
      num1: 13,
      num2: 14
    };
    expect(sumOfTwoIntegers(data)).toEqual(27);
  });
  it('Should return triple sum if equal to each other', () => {
    const value = 12;
    expect(sumOfTwoIntegers({ num1: value, num2: value })).toEqual(72);
  });
});
