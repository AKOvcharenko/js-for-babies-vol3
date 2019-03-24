/**
 * Create the areEqual function that will return true if the two supplied arguments hold exactly the same values
 * and the same number of values (not necessarily in the same order) and false if they do not.
 *
 * usage example
 *
   {laura:4, adam:3} & {laura:4, adam:3} => true
   {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
   [{a:4},{b:3}] & [{b:3},{a:4}]) => true
   {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
   'Hello' & 'Hello' => true
 *
 *
 * */

const areEqual = (first, second) => {
  const t1 = typeof first;
  const t2 = typeof second;

  if(t2 !== 'object' && t1 !== 'object') {
    return first === second;
  }

  if(Array.isArray(first) !== Array.isArray(second)) {
    return false;
  }

  const keys = [...Object.keys(first), ...Object.keys(second)];

  return keys.every((key) => areEqual(first[key], second[key]));
};


module.exports = areEqual;
