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
    let currentImg2 = $("#seeds2");
    let currentImg1 = $("#seeds1");

//grower 2 events when pushing "W"
    if (event.charCode === 119){
      if (currentImg2){
        currentImg2 = document.getElementById('spuds2').getAttribute('src');
        document.getElementById('seeds2').src = document.getElementById('spuds2').src
      }
       if (currentImg2 = document.getElementById('spuds2').getAttribute('src')){
        currentImg2 = document.getElementById('small-tree2').src;
        document.getElementById('spuds2').src = document.getElementById('small-tree2').src
      }
      if (currentImg2 = document.getElementById('small-tree2').getAttribute('src')){
        currentImg2 = document.getElementById('big-tree2').src;
        document.getElementById('small-tree2').src = document.getElementById('big-tree2').src
      }

    }
//grower 1 events when pushing "P"
    if (event.charCode === 112){
      if (currentImg1){
        currentImg1 = document.getElementById('spuds1').getAttribute('src');
        document.getElementById('seeds1').src = document.getElementById('spuds1').src
      }
      if (currentImg1 = document.getElementById('spuds1').getAttribute('src')){
       currentImg1 = document.getElementById('small-tree1').src;
       document.getElementById('spuds1').src = document.getElementById('small-tree1').src
     }
      if (currentImg1 = document.getElementById('small-tree1').getAttribute('src')){
       currentImg1 = document.getElementById('big-tree1').src;
       document.getElementById('small-tree1').src = document.getElementById('big-tree1').src
     }



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
