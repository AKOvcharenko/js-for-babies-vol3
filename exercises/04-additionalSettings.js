/**
 * write a function which takes 2 arguments: arrays of objects {key: string; value: string}
 * we need concat these two arrays
 * BUT
 *
 * in case if first argument array already has object with same key, we should replace it with object from second array
 * in case if first argument array does not contain object with same key, we should add this new object to first argument array
 *
 *
 * usage example
 *
 * firstArr = [
 *  {key: 'firstKey', value: 'firstValue'},
 *  {key: 'secondKey', value: 'secondValue'},
 *  {key: 'thirdKey', value: 'thirdValue'},
 * ];
 *
 * secondArr = [
 *  {key: 'fourthKey', value: 'fourthValue'},
 *  {key: 'fifthKey', value: 'fifthValue'},
 *  {key: 'thirdKey', value: 'sixthValue'},
 * ];
 *
 * getAdditionalSettings(firstArr, secondArr)
 * [
 *  {key: 'firstKey', value: 'firstValue'},
 *  {key: 'secondKey', value: 'secondValue'}, *
 *  {key: 'fourthKey', value: 'fourthValue'},
 *  {key: 'fifthKey', value: 'fifthValue'},
 *  {key: 'thirdKey', value: 'sixthValue'},
 * ];
 *
 *
 * */

const getAdditionalSettings = (firstArr, secondArr) => {
  const secondKeys = secondArr.map(({key}) => key);

  const uniqueFirsNames = firstArr.filter(({key}) => !secondKeys.includes(key));

  return [...uniqueFirsNames, ...secondArr];
};


module.exports = getAdditionalSettings;
