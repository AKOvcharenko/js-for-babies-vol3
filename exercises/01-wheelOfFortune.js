/**
 * Candidates take part in a TV show.
 * They have to roll the Wheel of Fortune!
 * Each candidate can roll the wheel and sum up the score of each roll.
 * The winner one that is closest to 100 (while still being lower or equal to 100).
 * You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.
 * Your solution should return the name of the winner or false if there is no winner (all scored more than 100).
 *
 * usage example
 * var c1 = { name: "Bob", scores: [10, 65] };
 * var c2 = { name: "Bill", scores: [90, 5] };
 * var c3 = { name: "Charlie", scores: [40, 55] };
 * winner([c1, c2, c3]); // Returns "Bill"
 * */

const getWinner = (candidates = []) => {
  let transformed = candidates.reduce((result, candidate) => {
    const scores = candidate.scores.reduce((result, current) => result + current);

    if(scores < 101) {
      result.push({name: candidate.name, scores})
    }
    return result;
  }, []);

  transformed = transformed.sort((first, second) => first.scores < second.scores ? 1 :-1);
  return transformed[0] ? transformed[0].name : false;
};


module.exports = getWinner;
