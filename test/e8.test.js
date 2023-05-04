import { it, describe, expect } from 'vitest';
import {
  getValueWithConditionOne,
  getValueWithConditionTwo,
  getValueWithConditionThree
} from '../exercises/e8';

describe('getValuesWithCondition', () => {
  const case1 = { num1: 40, num2: 40 };
  const case2 = { num1: 40, num2: 50 };
  const case3 = { num1: 20, num2: 30 };
  const case4 = { num1: 50, num2: 40 };
  const case5 = { num1: 50, num2: 50 };

  it('All three function must exist', () => {
    expect(getValueWithConditionOne).instanceOf(Function);
    expect(getValueWithConditionTwo).instanceOf(Function);
    expect(getValueWithConditionThree).instanceOf(Function);
  });

  it('All three functions must return 80 when both are 40', () => {
    expect(getValueWithConditionOne(case1)).toEqual(80);
    expect(getValueWithConditionTwo(case1)).toEqual(80);
    expect(getValueWithConditionThree(case1)).toEqual(80);
  });

  it('All three functions must return 180 for 40 and 50', () => {
    expect(getValueWithConditionOne(case2)).toEqual(180);
    expect(getValueWithConditionTwo(case2)).toEqual(180);
    expect(getValueWithConditionThree(case2)).toEqual(180);
  });

  it('All three functions must return 100 for 20 and 30', () => {
    expect(getValueWithConditionOne(case3)).toEqual(100);
    expect(getValueWithConditionTwo(case3)).toEqual(100);
    expect(getValueWithConditionThree(case3)).toEqual(100);
  });

  it('All three functions must return 180 for 50 and 40', () => {
    expect(getValueWithConditionOne(case4)).toEqual(180);
    expect(getValueWithConditionTwo(case4)).toEqual(180);
    expect(getValueWithConditionThree(case4)).toEqual(180);
  });

  it('All three functions must return 200 for 50 and 50', () => {
    expect(getValueWithConditionOne(case5)).toEqual(200);
    expect(getValueWithConditionTwo(case5)).toEqual(200);
    expect(getValueWithConditionThree(case5)).toEqual(200);
  });

  it('getValueWithConditionOne is NOT an arrow function', () => {
    expect('prototype' in getValueWithConditionOne).toEqual(true);
  });

  it('getValueWithConditionTwo is an ARROW function', () => {
    expect('prototype' in getValueWithConditionTwo).toEqual(false);
  });

  it('getValueWithConditionThree is NOT an arrow function', () => {
    expect('prototype' in getValueWithConditionThree).toEqual(true);
  });
});
