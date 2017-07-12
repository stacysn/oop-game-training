$(document).ready(function() {
  var countClickPlayer1 = 0;
  var countClickPlayer2 = 0;
  // var countClickPlayer1 = 0;
  //function water() //event Handler

  let hasWon = false;
  $("body").keypress(function(event){

//grower 1 events when pushing "W"
  // if(countClickPlayer1 >= 4) {
  //   //do some alert or whatever
  // } else if(countClickPlayer2 >=4 ){
  //   //same thing but for player 2
  // }
    if (event.charCode === 119){
      countClickPlayer1 += 1;

      if (countClickPlayer1 === 4){
        document.getElementById('seeds1').src = 'imgs/spud12.png';
        document.getElementById('seeds1').style.height = '200px';
        document.getElementById('seeds1').style.width = '200px';

      }
       if (countClickPlayer1 >= 8 && countClickPlayer1 < 15){
        document.getElementById('seeds1').src = 'imgs/smallTree1.png'
        document.getElementById('seeds1').style.height = '300px';
        document.getElementById('seeds1').style.width = '300px';
      }
      if (countClickPlayer1 >= 15 && hasWon === false){
        document.getElementById('seeds1').src = 'imgs/smallTree1.png'
        document.getElementById('seeds1').style.height = '400px';
        document.getElementById('seeds1').style.width = '400px';
        hasWon = true;
        $('h1').html("Grower 1 wins!")
      }
    }

//grower 2 events when pushing "P"
    if (event.charCode === 112){
      countClickPlayer2 += 1;

      if (countClickPlayer2 === 4){
        document.getElementById('seeds2').src = 'imgs/spud12.png'
        document.getElementById('seeds2').style.height = '200px';
        document.getElementById('seeds2').style.width = '200px';
        // console.log("PRINT ME", countClickPlayer1);
      }

      if ((countClickPlayer2 >= 8 && countClickPlayer2 < 15)){
        // console.log("PRINT ME #2", countClickPlayer1);
       document.getElementById('seeds2').src = 'imgs/player2tree.png';
       document.getElementById('seeds2').style.width = '300px';
       document.getElementById('seeds2').style.height = '300px';



     }

      if (countClickPlayer2 >= 15 && hasWon === false){
       document.getElementById('seeds2').src = 'imgs/player2tree.png'
       document.getElementById('seeds2').style.width = '400px';
       document.getElementById('seeds2').style.height = '400px';

       hasWon = true;
       $('h1').html("Grower 2 wins!")
       console.log(countClickPlayer2);
     }
    }

    if(event.charCode === 109){ //C key
      countClickPlayer1 -= 1;
    }
    if (event.charCode === 99){
      countClickPlayer2 -= 1;
    }

  })

  function resetGame(){
    hasWon = false;
    countClickPlayer1 = 0;
    countClickPlayer2 = 0;
    document.getElementById('seeds1').src = 'imgs/magicSeed.png'
    document.getElementById('seeds2').src = 'imgs/magicSeed.png'
    $('h1').html("Grow Your Tree!")

  };

  $("#reset").click(function(){
    resetGame();
  });

});
