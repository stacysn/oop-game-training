$(document).ready(function() {
  //function water() //event Handler

  // var grower1 = document.getElementById('Grower1');
  // grower1.keydown(function(e){
  // $("#grower2can").click(function(){
  //   $("#grower2can").effect("shake");
  // })
  // //
  // $("#grower1can").click(function(){
  //   $(this).shake();
  //   })
  // //   }
  // })
// //need event Listener


  $("body").keypress(function(event){
    let currentImg = $(".current-stage")
    if (event.charCode === 119){
      // if (currentImg = document.getElementById(''))
      // if (//current image is spuds2, change image to )

      document.getElementById('seeds2').src = document.getElementById('spuds2').src
    // this.effect("shake", {times:4}, 1000);
    } else if (event.charCode === 112){

      document.getElementById('seeds1').src = document.getElementById('spuds1').src
    }
  });


// $(document).ready (function(){
//   $("#grower2can").click(function(){
//     $("#grower2can").effect("shake", {times:4}, 1000);
//   });
// });


});






//function to change/grow tree images as watering keys are pressed
//function to
