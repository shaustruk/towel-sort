
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }

  let m = [];
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        m.push(matrix[i][j]);
      }
      else {
        let index = matrix[i].length - j - 1;
        m.push(matrix[i][index]);

      }
    }
  }
  return m;


}
