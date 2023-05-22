import { it, describe, expect } from 'vitest';
import { personAge } from '../exercises/e10';

describe('personAge', () => {
  it('The function should exist', () => {
    expect(personAge).instanceOf(Function);
  });

  it('Should return the value of the age property of the object passed', () => {
    const obj = { id: 1, name: 'Someone', age: 43 };
    expect(personAge(obj)).toEqual(43);
  });

  it('Must be refactored using arrow function syntax', () => {
    expect(!('prototype' in personAge)).toEqual(true);
  });
});
