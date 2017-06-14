// business
var Die = function() {
  this.sides = 6;
}

Die.prototype.rollDie = function() {
  return Math.floor((Math.random()*this.sides)+1);
}

var Player = function() {
  this.score = 0;
}

Player.prototype.updateScore = function (points) {
  return this.score += points;
}

var die = new Die();
var player = new Player();





//interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var points = die.rollDie();
    player.updateScore(points);
    // alert(points);
    // alert(player.score);
    $(".roll").text(points);
    $(".score").text(player.score);
  });
});
