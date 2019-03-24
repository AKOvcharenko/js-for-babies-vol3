const highestRank = require('./02-highestRankNumber');

const arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];
const arr2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
const arr3= [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];

describe('highestRank', () => {
  it('should be defined', () => {
    expect(highestRank).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof highestRank).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof highestRank([arr1])).toBe('number');
  });

  it('should return proper number', () => {
    expect(highestRank(arr1)).toBe(12);
  });

  it('should return proper number', () => {
    expect(highestRank(arr2)).toBe(12);
  });

  it('should return proper number', () => {
    expect(highestRank(arr3)).toBe(3);
  });

});
