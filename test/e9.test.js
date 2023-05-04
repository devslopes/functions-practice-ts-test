import { it, describe, expect } from 'vitest';
import { splitFirstAndLastNames } from '../exercises/e9';

describe('splitFirstAndLastNames', () => {
  const nameStr = 'Someone Somebodyvich';

  it('The function should exist', () => {
    expect(splitFirstAndLastNames).instanceOf(Function);
  });

  it('Should return an array of strings from a string', () => {
    expect(splitFirstAndLastNames(nameStr)).toEqual(['Someone', 'Somebodyvich']);
  });

  it('Must be refactored using arrow function syntax', () => {
    expect(!('prototype' in splitFirstAndLastNames)).toEqual(true);
  });
});
