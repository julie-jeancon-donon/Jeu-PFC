
var pcScore = 0;
var playerScore = 0;

while (pcScore < 3 && playerScore < 3) {

  var player = prompt("pierre, feuille, ciseaux?").toLowerCase();

  while ((player != "pierre") && (player != "feuille") && (player != "ciseaux")) {
    player = prompt("Non gros mâlin! Pierre, feuille ou ciseaux?!").toLowerCase();
  }

  var random = Math.floor(Math.random()*3);


  if(random === 0){
    random = "pierre";
  } else if(random === 1) {
    random = "feuille";
  } else {
    random = "ciseaux";
  }

 
  if (random === "feuille") {

    if (player === "pierre") {
      pcScore ++;
      alert("you lose!");

    }

    else if (player === "feuille"){
      alert("égalité!");
    }

    else {
      playerScore ++;
      alert("you win!");
    }

  }

  else if (random === "pierre") {

    if (player === "pierre") {
      alert("égalité");
    }

    else if (player === "feuille"){
      playerScore ++;
      alert("you win!");
    }

    else {
      pcScore ++;
      alert("you lose!");
    }


  }

  else {
    if (player === "pierre") {
      playerScore ++;
      alert("you win!");
    }

    else if (player === "feuille"){
      pcScore ++;
      alert("you lose!");
    }

    else{
      alert("égalité!");
    }
  }

  console.log("joueur "+ playerScore + "-" + pcScore +" ordinateur");

}

if (pcScore === 3) {
  alert("Loser!");
}

else {
  alert("Champion!");
}
