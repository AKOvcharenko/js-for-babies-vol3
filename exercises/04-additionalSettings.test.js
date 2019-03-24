const getAdditionalSettings = require('./04-additionalSettings');

const firstArr = [
  {key: 'firstKey', value: 'firstValue'},
  {key: 'secondKey', value: 'secondValue'},
  {key: 'thirdKey', value: 'thirdValue'},
];

const secondArr = [
  {key: 'fourthKey', value: 'fourthValue'},
  {key: 'fifthKey', value: 'fifthValue'},
  {key: 'thirdKey', value: 'sixthValue'},
];

describe('getAdditionalSettings', () => {
  it('should be defined', () => {
    expect(getAdditionalSettings).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof getAdditionalSettings).toBe('function');
  });

  it('should return an Array', () => {
    expect(Array.isArray(getAdditionalSettings(firstArr, secondArr))).toBe(true);
  });

  it('should return proper array', () => {
    expect(getAdditionalSettings(firstArr, secondArr)).toEqual([
      {key: 'firstKey', value: 'firstValue'},
      {key: 'secondKey', value: 'secondValue'},
      {key: 'fourthKey', value: 'fourthValue'},
      {key: 'fifthKey', value: 'fifthValue'},
      {key: 'thirdKey', value: 'sixthValue'},
    ]);
  });
});
