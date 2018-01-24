// function playerTurn1(){
//   var x = document.getElementById("square1").value;
//   document.getElementById("square1").innerText = "X";
// }
//
// function playerTurn2(){
//   var x = document.getElementById("square2").value;
//   document.getElementById("square2").innerText = "X";
// }
//
// function playerTurn3(){
//   var x = document.getElementById("square3").value;
//   document.getElementById("square3").innerText = "X";
// }
//
// function playerTurn4(){
//   var x = document.getElementById("square4").value;
//   document.getElementById("square4").innerText = "X";
// }
//
// function playerTurn5(){
//   var x = document.getElementById("square5").value;
//   document.getElementById("square5").innerText = "X";
// }
//
// function playerTurn6(){
//   var x = document.getElementById("square6").value;
//   document.getElementById("square6").innerText = "X";
// }
// function playerTurn7(){
//   var x = document.getElementById("square7").value;
//   document.getElementById("square7").innerText = "X";
// }
// function playerTurn8(){
//   var x = document.getElementById("square8").value;
//   document.getElementById("square8").innerText = "X";
// }
// function playerTurn9(){
//
//     var x = document.getElementById("square9").value;
//     document.getElementById("square9").innerText = "X";
// }
//
// function playerSwitch()
//
//
// }


var player_one = 1;
function playerTurn(square){
    if ( player_one == 1 ){
      var x = document.getElementById(square).value;
      document.getElementById(square).innerText = "X";
      $(".player1").hide();
      $(".player2").show();
      player_one = 0;
    } else {
        var x = document.getElementById(square).value;
        document.getElementById(square).innerText = "O";
        $(".player1").show();
        $(".player2").hide();
        player_one = 1;
    }
}


$(document).ready(function() {
  var player_one = 1;

});
