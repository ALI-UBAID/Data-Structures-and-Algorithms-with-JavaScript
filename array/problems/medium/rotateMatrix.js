function rotateMatrix(matrix, n, m) {
  // Transpose the matrix
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

function run() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const n = matrix.length;
  const m = matrix[0].length;
  rotateMatrix(matrix, n, m);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      console.log(matrix[i][j]);
    }
  }
}

run();
