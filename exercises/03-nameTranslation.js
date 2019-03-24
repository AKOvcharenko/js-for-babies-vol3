/**
 * write a function which takes array of objects {name: string; timestamp: number}
 * in case when name is not unique it should be translated to name + timestamp
 *
 * usage example
 *
 * arr = [
 *  {name: '1', timestamp: 1553440580960},
 *  {name: '2', timestamp: 1553440648379},
 *  {name: '5', timestamp: 1553440676571},
 *  {name: '1', timestamp: 1553440691542},
 *  {name: '2', timestamp: 1553440702119},
 * ];
 *
 * translateName(arr)
 * [
 *  {name: '1', timestamp: 1553440580960},
 *  {name: '2', timestamp: 1553440648379},
 *  {name: '5', timestamp: 1553440676571},
 *  {name: '1-1553440691542', timestamp: 1553440691542},
 *  {name: '2-1553440702119', timestamp: 1553440702119},
 * ];
 *
 *
 * */

const translateName = (arr) => {
  const names = arr.map((entity) => entity.name);

  return arr.map((entity, index) => {
    const isUniqueName = names.indexOf(entity.name) === index;

    if(isUniqueName) {
      return entity;
    }

    return {name: `${entity.name}-${entity.timestamp}`, timestamp: entity.timestamp };
  });
};


module.exports = translateName;
