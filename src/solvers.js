/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

window.findNRooksSolution = function(n) {
  var solution = makeEmptyMatrix(n);
  for(var i = 0; i < n; i++){
    solution[i][i] = 1;
  }

  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;


  var generator = function (numSpaces, playsMade, matrix){
    // break recursion under 2 criteria
    // if (n===2) {debugger;};

    if(numSpaces + 1 < (n - playsMade)){
      return;
    }


    if (numSpaces < 0 || playsMade === n) {
      if ( playsMade === n ) {
        var board = new Board(matrix);
        if (!board.hasAnyRooksConflicts()) {
          debugger;
          solutionCount++;
        }
      }
      return;
    }


    if (numSpaces < 0) {
      return;
    }

    numSpaces--;
    generator(numSpaces, playsMade, matrix);
    numSpaces++;

    matrix[(numSpaces - (numSpaces % n))/n][numSpaces % n] = 1;

    numSpaces--;
    generator(numSpaces, playsMade+1, matrix);
    numSpaces++;

    matrix[(numSpaces - (numSpaces % n))/n][numSpaces % n] = 0;

  };


  var empty = makeEmptyMatrix(n);

  // if (n === 1) {
  //   return 1;
  // }
  generator((n*n)-1, 0, empty);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
