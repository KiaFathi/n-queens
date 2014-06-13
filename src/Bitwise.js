var NQ = function(n){
  var solutions = 0;
  //Subroutine
  var bitmagic = function(){
    var end = Math.pow(2,(n))- 1;
  };
    //initialize 3 empty bit thingys of length n
      //col
      //right
      //left
    //for loop that runs n times(iterates through columns)
      // do or operation on three bit things.
        //no free positions? if playcount = n, solutions++ and return
        // First free position is our move

        //indicates the changes in bit thingys based on position(i)
        //call subroutine again where col is the same
          //right shifts right
          //left shifts
  bitmagic();
  return solutions;
};
