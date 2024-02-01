const { getRandomId, getRandomNumber } = require('../utils/helpers');

describe('getRandomId', () => {
  it('returns a random string of length 8', () => {
    const id = getRandomId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(8);
  });

  it('returns a random string of specified length', () => {
    const id = getRandomId(4);
    expect(typeof id).toBe('string');
    expect(id.length).toBe(4);
  });
});

describe('getRandomNumber', () => {
  it('returns a number between min and max', () => {
    const min = 1;
    const max = 10;
    const num = getRandomNumber(min, max);
    expect(num).toBeGreaterThanOrEqual(min);
    expect(num).toBeLessThan(max);
  });

  it('throws an error if min is greater than max', () => {
    expect(() => getRandomNumber(10, 1)).toThrow();
  });
});
