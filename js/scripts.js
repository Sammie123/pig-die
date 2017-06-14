// business
var Die = function() {
  this.sides = 6;
}

Die.prototype.rollDie = function() {
  return Math.floor((Math.random()*this.sides)+1);
}

var Player = function() {
  this.score = 0;
  this.hasDie = false;
}

Player.prototype.updateScore = function (points) {
  return this.score += points;
}

var die = new Die();
var player1 = new Player();
var player2 = new Player();

player1.hasDie = true;

//interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //var points = die.rollDie(); // roll die
    //player.updateScore(points); // update score

    if (player1.hasDie) {
      var points = die.rollDie();
      if (points === 1) {
        player1.hasDie = false;
        player2.hasDie = true;
      } else {
        player1.updateScore(points);
      }
    } else {
      var points = die.rollDie();
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



  });
});
