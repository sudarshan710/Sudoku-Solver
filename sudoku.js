var N = 16;


// // Original Setup - Test Case 0
// var randomSudoku = [
//   [11, 2, 0, 14, 3, 0, 0, 6, 7, 8, 0, 10, 0, 0, 15, 16],
//   [0, 4, 0, 0, 2, 0, 0, 7, 0, 0, 16, 12, 0, 5, 14, 0],
//   [0, 0, 0, 0, 10, 0, 0, 0, 1, 2, 0, 5, 0, 3, 7, 0],
//   [0, 9, 7, 3, 8, 12, 0, 13, 6, 0, 14, 15, 1, 4, 10, 2],
//   [0, 3, 2, 0, 5, 16, 8, 0, 0, 6, 10, 0, 0, 15, 12, 13],
//   [6, 0, 8, 7, 1, 3, 0, 0, 12, 0, 15, 0, 2, 10, 0, 14],
//   [13, 0, 12, 0, 9, 10, 0, 2, 4, 0, 3, 0, 16, 1, 5, 6],
//   [9, 10, 14, 16, 0, 6, 12, 11, 5, 0, 2, 0, 0, 7, 0, 8],
//   [2, 0, 3, 0, 0, 0, 11, 0, 10, 0, 0, 16, 14, 0, 0, 0],
//   [4, 0, 11, 0, 12, 14, 0, 0, 13, 9, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 12, 0, 0, 0, 16, 0, 0, 5, 14, 0, 0, 0, 0],
//   [14, 0, 16, 13, 0, 2, 1, 0, 11, 0, 0, 3, 10, 0, 0, 0],
//   [3, 0, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 0, 0, 16, 0],
//   [16, 0, 0, 9, 11, 0, 0, 0, 14, 0, 6, 4, 0, 8, 13, 10],
//   [10, 14, 6, 0, 16, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 12],
//   [0, 0, 0, 0, 14, 9, 0, 12, 16, 10, 0, 0, 3, 0, 0, 7],
// ];


// // Test Case 2
// var randomSudoku = [
//     [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
  

//  Test Case 1
var randomSudoku = [
  [11, 2, 0, 14, 3, 0, 0, 6, 7, 8, 0, 10, 0, 0, 15, 16],
  [0, 4, 0, 0, 2, 0, 0, 7, 0, 7, 16, 12, 0, 5, 14, 0],
  [0, 0, 0, 0, 10, 0, 0, 0, 1, 2, 0, 5, 0, 3, 7, 0],
  [0, 9, 7, 3, 8, 12, 0, 13, 6, 0, 14, 15, 1, 4, 10, 2],
  [0, 3, 2, 0, 5, 16, 8, 0, 0, 6, 10, 0, 0, 15, 12, 13],
  [6, 0, 8, 7, 1, 3, 0, 0, 12, 0, 15, 0, 2, 10, 0, 14],
  [13, 0, 12, 0, 9, 10, 0, 2, 4, 0, 3, 0, 16, 1, 5, 6],
  [9, 10, 14, 16, 0, 6, 12, 11, 5, 0, 2, 0, 0, 7, 0, 8],
  [2, 0, 3, 0, 0, 0, 11, 0, 10, 0, 0, 16, 14, 0, 0, 0],
  [4, 0, 11, 0, 12, 14, 0, 0, 13, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 12, 0, 0, 0, 16, 0, 0, 5, 14, 0, 0, 0, 0],
  [14, 0, 16, 13, 0, 2, 1, 0, 11, 0, 0, 3, 10, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 0, 0, 16, 0],
  [16, 0, 0, 9, 11, 0, 0, 0, 14, 0, 6, 4, 0, 8, 13, 10],
  [10, 14, 6, 0, 16, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 12],
  [0, 0, 0, 0, 14, 9, 0, 12, 16, 10, 0, 0, 3, 0, 0, 7],
];

var finishedSudoku = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// document.addEventListener("DOMContentLoaded", function () {
//   let setBtn = document.getElementById("set");
//   setBtn.addEventListener("click", function () {
//     setSudoku();
//   });
// });


window.onload = function(){
    setSudoku();
};

function setSudoku() {
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      let holder = document.createElement("div");
      holder.id = r.toString() + "-" + c.toString();
      holder.innerText = randomSudoku[r][c];
      holder.classList.add("cell");
      document.getElementById("board").append(holder);
    }
  }
  console.log("Sodoku Set!");
}

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("solve");
  button.addEventListener("click", function () {
    console.log("CLICKED!!!");
    if (solveSudoku(0, 0)) {
      console.log("SUCCESSFUL!");
      setStatus();
    } else {
        let status = document.getElementById("status");
        status.innerText = "Status : Unsolvable!";
        console.log("This Sudoku cannot be solved!");
    }
  });
});

function setStatus() {
  let status = document.getElementById("status");
  status.innerText = "Status : Solved!";
}

function setSolvedSudoku() {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      let holder = document.getElementById(`${r}-${c}`);
      holder.innerText = finishedSudoku[r][c];
    }
  }
}

function isSafe(row, col, x) {
  for (let i = 0; i < N; i++) {
    if (randomSudoku[row][i] === x) {
      return false;
    }
  }

  for (let i = 0; i < N; i++) {
    if (randomSudoku[i][col] === x) {
      return false;
    }
  }

  let startRow = row - (row % 4);
  let startCol = col - (col % 4);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (randomSudoku[i + startRow][j + startCol] === x) return false;
    }
  }

  return true;
}

function solveSudoku(row, col) {
  if (row == 16) {
    // Base case: we have filled in every cell in the grid
    setSolvedSudoku();
    return true;
  }

  if (randomSudoku[row][col] > 0) {
    // This cell is already filled in, move to the next one
    finishedSudoku[row][col] = randomSudoku[row][col];
    if (solveSudoku(col == 15 ? row + 1 : row, (col + 1) % 16)) {
      return true;
    }
  } else {
    // Try filling in this cell with each possible value
    for (let i = 1; i <= 16; i++) {
      if (isSafe(row, col, i)) {
        randomSudoku[row][col] = i;
        if (solveSudoku(col == 15 ? row + 1 : row, (col + 1) % 16)) {
          return true;
        }
        randomSudoku[row][col] = 0; // backtrack
      }
    }
  }
  return false;
}

// function solveSudoku(row, col) {
//   if (row == N - 1 && col == N) {
//     setSolvedSudoku();
//     return true;
//   }

//   if (col == N) {
//     col = 0;
//     row++;
//   }

//   if (randomSudoku[row][col] != 0) {
//     solveSudoku(row + 1, col + 1);
//   } else {
//       for (let color = 1; color < 17; color++) {
//         if (isSafe(row, col, color)) {
//           finishedSudoku[row][col] = color;

//           if (solveSudoku(row + 1, col + 1)) {
//             setSolvedSudoku();
//             setStatus();
//             return;
//           }
//         }
//         randomSudoku[row][col] = 0;
//       }
//   }
//   return false;
// }
