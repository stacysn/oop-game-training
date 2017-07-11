$(document).ready(function() {
  var countClickPlayer2 = 0;
  var countClickPlayer1 = 0;
  // var countClickPlayer1 = 0;
  //function water() //event Handler

  $("body").keypress(function(event){
    let currentImg2 = $("#seeds2");
    let currentImg1 = $("#seeds1");
//grower 2 events when pushing "W"
  // if(countClickPlayer1 >= 4) {
  //   //do some alert or whatever
  // } else if(countClickPlayer2 >=4 ){
  //   //same thing but for player 2
  // }

    if (event.charCode === 119){
      countClickPlayer2 += 1;

      if (countClickPlayer2 === 4){
        document.getElementById('seeds2').src = 'imgs/spud.jpeg'
      }
       if (countClickPlayer2 >= 8 && countClickPlayer2 < 15){
        document.getElementById('seeds2').src = 'imgs/smallTree.jpeg'
      }
      if (countClickPlayer2 > 15){
        document.getElementById('seeds2').src = 'imgs/bigTree1.jpeg'
      }


    }

//grower 1 events when pushing "P"
    if (event.charCode === 112){
        // console.log("player 1 score:", countClickPlayer1);
      countClickPlayer1 += 1;

      if (countClickPlayer1 === 4){
        document.getElementById('seeds1').src = 'imgs/spud.jpeg'
        // console.log("PRINT ME", countClickPlayer1);
      }

      if ((countClickPlayer1 >= 8 && countClickPlayer1 < 15)){
        // console.log("PRINT ME #2", countClickPlayer1);
       document.getElementById('seeds1').src = 'imgs/smallTree.jpeg'
     }

      if (countClickPlayer1 >= 15){
       countClickPlayer1 += 1;
       document.getElementById('seeds1').src = 'imgs/bigTree2.jpeg'
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

});


// $(document).ready (function(){
//   $("#grower2can").click(function(){
//     $("#grower2can").effect("shake", {times:4}, 1000);
//   });
// });







//function to change/grow tree images as watering keys are pressed
//function to
