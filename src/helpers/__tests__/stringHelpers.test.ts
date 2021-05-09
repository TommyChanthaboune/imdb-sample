import { parseUrlParam, parseOptions } from '../stringHelpers';

describe('Helper - stringHelpers', () => {
  it('parseUrlParam', () => {
    const param = parseUrlParam('true-crime');

    expect(param).toBe('True Crime');
  });

  it('parseOptions', () => {
    const option = parseOptions('helloDelilah');

    expect(option).toBe('Hello Delilah')
  });
});
