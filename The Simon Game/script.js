var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("h1").text("LEVEL" + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  userClickedPattern.push($(this).attr("id"));
  var audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
  audio.play();
  $("#" + $(this).attr("id")).fadeIn(100).fadeOut(100).fadeIn(100);
  checkanswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("LEVEL" + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function checkanswer(currentlevel) {
  if (userClickedPattern[currentlevel] === gamePattern[currentlevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    started = false;
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("GAME OVER, PRESS ANY KEY TO CONTINUE");
  }
}
