const translateName = require('./03-nameTranslation');

const arr = [
  {name: '1', timestamp: 1553440580960},
  {name: '2', timestamp: 1553440648379},
  {name: '5', timestamp: 1553440676571},
  {name: '1', timestamp: 1553440691542},
  {name: '2', timestamp: 1553440702119},
];

describe('translateName', () => {
  it('should be defined', () => {
    expect(translateName).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof translateName).toBe('function');
  });

  it('should return an Array', () => {
    expect(Array.isArray(translateName(arr))).toBe(true);
  });

  it('should return proper array', () => {
    expect(translateName(arr)).toEqual([
        {name: '1', timestamp: 1553440580960},
        {name: '2', timestamp: 1553440648379},
        {name: '5', timestamp: 1553440676571},
        {name: '1-1553440691542', timestamp: 1553440691542},
        {name: '2-1553440702119', timestamp: 1553440702119},
    ]);
  });
});
