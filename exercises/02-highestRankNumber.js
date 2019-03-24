/**
 * Write a method highestRank(arr) which returns the number which is most frequent in the given input array.
 * If there is a tie for most frequent number, return the largest number of which is most frequent.
 *
 * usage example
 *
 * arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
   highestRank(arr) //=> returns 12

   arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
   highestRank(arr) //=> returns 12

   arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
   highestRank(arr) //=> returns 3
 * */

const highestRank = (arr) => {
  let result = 0;
  const translated = arr.reduce((result, current) => {
    if( current in result ) {
      result[current] += 1;
    }
    else {
      result[current] = 1;
    }
    return result;
  },{});

  for(key in translated) {
    let keyAsNum = Number(key);
    if (!result) result = keyAsNum;
    else if(translated[keyAsNum] > translated[result]) result = keyAsNum;
    else if (translated[keyAsNum] === translated[result] && result < keyAsNum) result = keyAsNum;
  }

  return result;
};


module.exports = highestRank;
