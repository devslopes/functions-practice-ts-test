import { vitest, it, describe, expect } from 'vitest';
import { logMyInfo } from '../exercises/e4';

describe('logMyInfo', () => {
  it('The test function should exist', () => {
    expect(logMyInfo).instanceOf(Function);
  });

  it('The function logs a message using two arguments passed', () => {
    const person = { name: 'Kris', age: 29 };
    const logSpy = vitest.spyOn(console, 'log');
    const testStart = 'My name is';
    const testName = ` ${person.name}`;
    const testMiddle = '. I am';
    const testAge = ` ${person.age} `;
    const testEnd = 'years old!';
    logMyInfo(person.name, person.age);
    expect(logSpy).toBeCalledWith(`${testStart + testName + testMiddle + testAge + testEnd}`);
  });

  it('The function logs a message using two arguments passed', () => {
    const person = { name: 'Emma', age: 23 };
    const logSpy = vitest.spyOn(console, 'log');
    const testStart = 'My name is';
    const testName = ` ${person.name}`;
    const testMiddle = '. I am';
    const testAge = ` ${person.age} `;
    const testEnd = 'years old!';
    logMyInfo(person.name, person.age);
    expect(logSpy).toBeCalledWith(`${testStart + testName + testMiddle + testAge + testEnd}`);
  });

  it('The function returns undefined', async () => {
    const person = { name: 'Jack', age: 43 };
    expect(logMyInfo(person.name, person.age)).toEqual(undefined);
  });
});
