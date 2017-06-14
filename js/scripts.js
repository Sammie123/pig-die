// business
var Die = function() {
  this.sides = 6;
}

Die.prototype.rollDie = function() {
  return Math.floor((Math.random()*this.sides)+1);
}

var Player = function(name) {
  this.name = name;
  this.score = 0;
  this.hasDie = false;
}

Player.prototype.updateScore = function (points) {
  return this.score += points;
}

var die = new Die();
var player1 = new Player("Lincoln");
var player2 = new Player("Michael");

player1.hasDie = true;

//interface
$(document).ready(function() {

  $(".playerName1").text(player1.name);
  $(".playerName2").text(player2.name);

  $("form").submit(function(event) {
    event.preventDefault();

    //var points = die.rollDie(); // roll die
    //player.updateScore(points); // update score

    var points = die.rollDie();

    if (player1.hasDie) {
      if (points === 1) {
        player1.hasDie = false;
        player2.hasDie = true;
      } else {
        player1.updateScore(points);
      }
    } else {
      if (points === 1) {
        player2.hasDie = false;
        player1.hasDie = true;
      } else {
        player2.updateScore(points);
      }
    }

    $(".roll").text(points);
    //$(".score").text(player.score);

    $(".playerScore1").text(player1.score);
    $(".playerScore2").text(player2.score);

    if (player1.score >= 100 || player2.score >= 100) {
      var winner = (player1.score >= 100) ? player1.name : player2.name;
      $(".winner").text(winner);
      $(".gameOver").show();
    }



  });
});
