
//declaration variables PC score User score et tableau
var pcScore = 0;
var playerScore = 0;
var myArray = ["pierre", "feuille", "ciseaux"];

//Display none PFC, end game message, score
document.getElementById("pfc").style.display = "none";
document.getElementById("pfc2").style.display = "none";

document.getElementById("end").style.display = "none";
document.getElementById("score").style.display = "none";
document.getElementById("avatar-choice").style.display = "none";
document.getElementById("rules").style.display = "none";
document.getElementById("myBtn").style.display = "none";


//function user name
document.getElementById("send_pseudo").addEventListener("click",function(){
  var choice_name = document.getElementById("pseudo_user").value;
  document.getElementById("player_name").innerHTML = choice_name;
  // display block PFC game
  document.getElementById("pfc").style.display = "none";
  document.getElementById("pfc2").style.display = "none";
  //display none input user name
  document.getElementById("container_input_pseudo").style.display = "none";
  //display block score
  document.getElementById("score").style.display = "none";
  document.getElementById("avatar-choice").style.display = "none";
  document.getElementById("rules").style.display = "block";

});


// rules

document.getElementById("click_rules").addEventListener("click",function(){
  document.getElementById("pfc").style.display = "block";
  document.getElementById("pfc2").style.display = "block";
  document.getElementById("container_input_pseudo").style.display = "none";
  document.getElementById("score").style.display = "block";
  document.getElementById("avatar-choice").style.display = "none";
  document.getElementById("rules").style.display = "none";
  document.getElementById("myBtn").style.display = "block";

});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// function to restart the game
document.getElementById("replay").addEventListener("click",function(){
  pcScore = 0;
  playerScore = 0;
  // display none end game message
  document.getElementById("end").style.display = "none";
//display block PFC game
  document.getElementById("pfc").style.display = "block";
  document.getElementById("pfc2").style.display = "block";
  document.getElementById("rules").style.display = "none";

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("pcScore").innerHTML = pcScore;

});


function playerMove(choice_move) {
  var elem = document.getElementById(choice_move);
  var pos = 180;
  var id = setInterval(frame, 0.1);
  function frame() {
    if (pos == 500) {
      clearInterval(id);

      var id2 = setInterval(frame2, 1000);
      function frame2() {
        if (pos == 180) {
          clearInterval(id2);

        } else {
          pos-= 320;
          elem.style.left = pos + 'px';
        }
      }


    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }

}


function pcMove(choicepc_move) {
  var elem = document.getElementById(choicepc_move);
  var pos = 325;
  var id = setInterval(frame, 0.1);
  function frame() {
    if (pos == 5) {
      clearInterval(id);

      var id2 = setInterval(frame2, 1000);
      function frame2() {
        if (pos == 325) {
          clearInterval(id2);

        } else {
          pos+=320;
          elem.style.left = pos + 'px';
        }
      }


    } else {
      pos-=1;
      elem.style.left = pos + 'px';
    }
  }

}




function battle (userChoice){


var pcChoice = myArray[Math.floor(Math.random() * myArray.length)];
document.getElementById("choice_pc").innerHTML = pcChoice;


  if (pcChoice === "feuille") {

    pcMove("pc_paper");

      if (userChoice === "pierre") {

        playerMove("player_rock");
        pcScore ++;
      }

      else if (userChoice === "feuille"){
        playerMove("player_paper");
      }

      else {
        playerScore ++;
        playerMove("player_scissors");
      }

  }

  else if (pcChoice === "pierre") {

    pcMove("pc_rock");

      if (userChoice === "pierre") {

        playerMove("player_rock");


      }

      else if (userChoice === "feuille"){
        playerMove("player_paper");
        playerScore ++;
      }

      else {
        playerMove("player_scissors");
        pcScore ++;
      }


  }

  else {

    pcMove("pc_scissors");

      if (userChoice === "pierre") {

        playerMove("player_rock");
        playerScore ++;
      }

      else if (userChoice === "feuille"){
        playerMove("player_paper");
        pcScore ++;
      }

      else{
        playerMove("player_scissors");
      }
  }

//incrementation score
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("pcScore").innerHTML = pcScore;


if (pcScore === 3){
  //dsiplay none PFC game
  document.getElementById("pfc").style.display = "none";
  document.getElementById("pfc2").style.display = "none";
  document.getElementById("result").innerHTML = "You lose!";
  //display block end game message you lose and restart button
  document.getElementById("end").style.display = "block";
  document.getElementById("choice_pc").innerHTML = "";
  document.getElementById("img_lose").style.display = "block";
  document.getElementById("img_win").style.display = "none";


}

else if (playerScore === 3){
  //display none PFC game
  document.getElementById("pfc").style.display = "none";
  document.getElementById("pfc2").style.display = "none";
  document.getElementById("result").innerHTML = "You win!";
  //display block end game message you win an
  document.getElementById("end").style.display = "block";
  document.getElementById("choice_pc").innerHTML = "";
  document.getElementById("img_lose").style.display = "none";
  document.getElementById("img_win").style.display = "block";



}
}
