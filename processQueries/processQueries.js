/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  var p = [];
  var result = [];
  var count = 1;

  while (p.length < m) {
      p.push(count);
      count++;
  }

  queries.forEach((x, i) => {
      p.forEach((y, i2) => {
          if (x === y) {
              result.push(i2);
              p.splice(i2, 1);
              p.unshift(y);
          }
      })
  })

  return result;
};