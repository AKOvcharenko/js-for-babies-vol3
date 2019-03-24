const getWinner = require('./01-wheelOfFortune');

const c1 = { name: "Bob", scores: [10, 65] };
const c2 = { name: "Bill", scores: [90, 5] };
const c3 = { name: "Charlie", scores: [40, 55] };

describe('getWinner', () => {
  it('should be defined', () => {
    expect(getWinner).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof getWinner).toBe('function');
  });

  it('should return a string if we have winner', () => {
    expect(typeof getWinner([c1, c2, c3])).toBe('string');
  });

  it('should return a false in case when we dont have winner', () => {
    expect(getWinner()).toBe(false);
  });

  it('should return proper winner', () => {
    expect(getWinner([c1, c2, c3])).toBe('Bill');
  });

});
