var imageSprite = new Image();
imageSprite.src = 'images/sprite.png';
imageSprite.addEventListener('load', canvas.init.bind(canvas), false);
var fighterJet = new Jet();

function pauseGame() {
  canvas.stopPlaying();
  $("#afterPause").fadeIn(1000);
  //$("#afterPause").removeClass('d-none');
  //afterPause
}

function resumeGame() {
  $("#afterPause").fadeOut(1000);
  startGame();
}

function startGame() {
  canvas.startPlaying();

}

function initGameState() {
  fighterJet.score.score = 0;
  fighterJet.score.update();
  fighterJet.life = 3;
  level.currentLevel = 0;
}

function restart() {
  initGameState();
  fighterJet.options.drawX = 200;
  fighterJet.options.drawY = 300;
  canvas.enemies = [];
  canvas.init();
  resumeGame();
  $("#resume").text("Resume Game").attr('disabled', false);
}

function menu() {
  restart();
  canvas.stopPlaying();
  //pauseGame();
  $("#afterPause").fadeOut(100);
  $("#startGame").fadeIn(1000);
  //play();
}

function play() {
  //document.getElementById("startGame").style.display = "none";
  $("#startGame").fadeOut(1000);
  $("#pause").removeClass('d-none');
  startGame();

}