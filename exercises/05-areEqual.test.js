const areEqual = require('./05-areEqual');

const case1 = [
  {laura:4, adam:3},
  {laura:4, adam:3},
];

const case2 = [
  {adam:3, laura:4, maisie:2},
  {laura:4, adam:3}
];

const case3 = [
  [{a:4},{b:3}],
  [{a:4}, {b:3}],
];

const case4 = [
  {a:['5','6','7'], b:['4','5','6']},
  {a:[5,6,7], b:[4,5,6]},
];

const case5 = [
  'Hello',
  'Hello'
];


describe('getAdditionalSettings', () => {
  it('should be defined', () => {
    expect(areEqual).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof areEqual).toBe('function');
  });

  it('should return a boolean', () => {
    expect(typeof areEqual(case1[0], case1[1])).toBe('boolean');
  });

  it('should return proper result case1', () => {
    expect(areEqual(case1[0], case1[1])).toEqual(true);
  });

  it('should return proper result case2', () => {
    expect(areEqual(case2[0], case2[1])).toEqual(false);
  });

  it('should return proper result case3', () => {
    expect(areEqual(case3[0], case3[1])).toEqual(true);
  });

  it('should return proper result case4', () => {
    expect(areEqual(case4[0], case4[1])).toEqual(false);
  });

  it('should return proper result case5', () => {
    expect(areEqual(case5[0], case5[1])).toEqual(true);
  });
});
