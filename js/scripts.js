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

Player.prototype.updateScore = function (n) {
  return this.score += n;
}

var die = new Die();
var player1 = new Player("Lincoln");
var player2 = new Player("Michael");
var potentialPoints = 0;

player1.hasDie = true;

//interface
$(document).ready(function() {


  $(".playerName1").text(player1.name);
  $(".playerName2").text(player2.name);
  $("#player1roll").show();



  var hold = $("form.holdForm").submit(function(event) {
    event.preventDefault();

    if (player1.hasDie) {
      alert ("player1 has die");
      player1.hasDie = false;
      player2.hasDie = true;
      $("#player2roll").show();
      $("#player1roll").hide();
      player1.updateScore(potentialPoints);
      potentialPoints = 0;
      $(".playerScore1").text(player1.score);

    } else {
      player2.hasDie = false;
      player1.hasDie = true;
      $("#player1roll").show();
      $("#player2roll").hide();
      alert ("potentialPoints: " + potentialPoints);
      player2.updateScore(potentialPoints);
      potentialPoints = 0;
      $(".playerScore2").text(player2.score);
    }




  });

  $("form.rollForm").submit(function(event) {
    event.preventDefault();

    //var points = die.rollDie(); // roll die
    //player.updateScore(points); // update score

    var points = die.rollDie();

    switch (points) {
        case 1:
            $(".die").css({"background-image": "url('img/one.gif')"});
            break;
        case 2:
            $(".die").css({"background-image": "url('img/two.gif')"});
            break;
        case 3:
            $(".die").css({"background-image": "url('img/three.gif')"});
            break;
        case 4:
            $(".die").css({"background-image": "url('img/four.gif')"});
            break;
        case 5:
            $(".die").css({"background-image": "url('img/five.gif')"});
            break;
        case 6:
            $(".die").css({"background-image": "url('img/six.gif')"});
    }





    if (player1.hasDie) {

      if (points === 1) {
        player1.hasDie = false;
        player2.hasDie = true;
        $("#player2roll").show();
        $("#player1roll").hide();
        potentialPoints = 0;

      }
    } else {
      if (points === 1) {
        player2.hasDie = false;
        player1.hasDie = true;
        $("#player1roll").show();
        $("#player2roll").hide();
        potentialPoints = 0;
      }
    }

    potentialPoints += points;

    if ((player1.hasDie && player1.score + potentialPoints >= 20) || (player2.hasDie && player2.score + potentialPoints >= 20)) {
      player1.hasDie ? player1.score += potentialPoints : player2.score += potentialPoints;

      $(".rollForm").hide();
      $(".holdForm").hide();
      var winner = (player1.score >= 20) ? player1.name : player2.name;
      $(".winner").text(winner);
      $(".gameOver").show();
    }

    $(".roll").text(points);
    //$(".score").text(player.score);

    $(".playerScore1").text(player1.score);
    $(".playerScore2").text(player2.score);





  });
});
