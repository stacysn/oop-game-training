$(document).ready(function() {
  var countClickPlayer1 = 0;
  var countClickPlayer2 = 0;
  // var countClickPlayer1 = 0;
  //function water() //event Handler

  let hasWon = false;
  $("body").keypress(function(event){
    let currentImg1 = $("#seeds1");
    let currentImg2 = $("#seeds2");
//grower 1 events when pushing "W"
  // if(countClickPlayer1 >= 4) {
  //   //do some alert or whatever
  // } else if(countClickPlayer2 >=4 ){
  //   //same thing but for player 2
  // }
    if (event.charCode === 119){
      countClickPlayer1 += 1;

      if (countClickPlayer1 === 4){
        document.getElementById('seeds1').src = 'imgs/spud.jpeg'
      }
       if (countClickPlayer1 >= 8 && countClickPlayer1 < 15){
        document.getElementById('seeds1').src = 'imgs/smallTree.jpeg'
      }
      if (countClickPlayer1 >= 15 && hasWon === false){
        document.getElementById('seeds1').src = 'imgs/bigTree1.jpeg'
        hasWon = true;
        $('h1').html("Grower 1 wins!")
      }
    }

//grower 2 events when pushing "P"
    if (event.charCode === 112){
        // console.log("player 1 score:", countClickPlayer1);
      countClickPlayer2 += 1;

      if (countClickPlayer2 === 4){
        document.getElementById('seeds2').src = 'imgs/spud.jpeg'
        // console.log("PRINT ME", countClickPlayer1);
      }

      if ((countClickPlayer2 >= 8 && countClickPlayer2 < 15)){
        // console.log("PRINT ME #2", countClickPlayer1);
       document.getElementById('seeds2').src = 'imgs/smallTree.jpeg'
     }

      if (countClickPlayer2 >= 15 && hasWon === false){
       document.getElementById('seeds2').src = 'imgs/bigTree2.jpeg'
       hasWon = true;
       $('h1').html("Grower 2 wins!")
       console.log(countClickPlayer2);
     }
    }
    // if(event.charCode === 99){ //WHY IS THIS NOT WORKINGGGGGG??
    //   if (currentImg1 = document.getElementById('small-tree1').getAttribute('src')){
    //     currentImg1 = document.getElementById('spuds1').src;
    //     console.log("HERE", currentImg1);
    //     document.getElementById('small-tree1').src = document.getElementById('spuds1').src;
    //
    //   }
  })

  function resetGame(){
    hasWon = false;
    countClickPlayer1 = 0;
    countClickPlayer2 = 0;
    document.getElementById('seeds1').src = 'imgs/redwoodSeed.jpeg'
    document.getElementById('seeds2').src = 'imgs/redwoodSeed.jpeg'
    $('h1').html("Grow Your Tree!")

  };

  $("#reset").click(function(){
    resetGame();
  });

});
