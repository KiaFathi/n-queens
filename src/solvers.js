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


  var generator = function (position, playsMade, matrix){

    //Should check that the remaining spaces are < plays remaining
    if((n*n) - position < (n - playsMade)){
      return;
    }


    // //Make sure not to pass pos that is out of board
    if(position + 1 > n*n){
      return;
    }

    //call generator with unchanged board
    position++;

    generator(position, playsMade, matrix);
    position--;

    //change board and call generator
    var newMatrix = JSON.parse(JSON.stringify(matrix));
    newMatrix[(position - (position % n))/n][position % n] = 1;
    var newPlays = playsMade + 1;

    //Checks to see if we are out of plays. If so we may have a solution
    if (newPlays === n) {
      var board = new Board(newMatrix);
      if (!board.hasAnyRooksConflicts()) {
        solutionCount++;
      }
      return;
    }

    //otherwise we move and pass the new board down
    var moveFactor;
    if (position % n === 0){
      moveFactor = n + 1;
    } else {
      moveFactor = (n - (position % n));
    }

    var newPosition = position + moveFactor;

    //Make sure not to pass pos that is out of board
    if(newPosition > n*n){
      return;
    }

    //call generator with new state
    generator(newPosition, newPlays, newMatrix);



  };


  var empty = makeEmptyMatrix(n);

  if (n === 1 || n === 0) {
    return 1;
  }
  generator(0, 0, empty);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  var solutionCount = 0;


  var nQ = function(row, colC, maDC, miDC) {
    // if (n===2) { debugger; }
    var row = row || 0;
    var colC = colC || {};
    var maDC = maDC || {};
    var miDC = miDC || {};



    for (var i = 0; i < n; i ++) {
      if (!colC[i] && !maDC[i - row] && !miDC[row + i]) {
        if (row + 1 === n) {
          solutionCount ++;
          return;
        }
        colC[i] = true;
        maDC[i - row] = true;
        miDC[row  + i] = true;
        nQ(row + 1, colC, maDC, miDC);
        colC[i] = false;
        maDC[i - row] = false;
        miDC[row + i] = false;
      }
    }
  };
  nQ();


  return solutionCount;
};























