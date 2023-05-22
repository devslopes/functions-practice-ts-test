import { vitest, it, describe, expect } from 'vitest';
import { logMyMessage } from '../exercises/e2';

describe('logMyMessage', () => {
  const message = 'Test logMyMessage: Test 0';
  it('The test function should exist', () => {
    expect(logMyMessage).instanceOf(Function);
  });

  it('Should log a message passed as an argument 1', () => {
    const logSpy = vitest.spyOn(console, 'log');
    const messageOne = 'Test logMyMessage: Test 1';
    const messageTwo = 'Test logMyMessage: Test 2';
    logMyMessage(messageOne);
    logMyMessage(messageTwo);
    expect(logSpy).toBeCalledWith(messageOne);
    expect(logSpy).toHaveBeenLastCalledWith(messageTwo);
  });

  it('The function returns undefined', async () => {
    expect(logMyMessage(message)).toEqual(undefined);
  });
});
