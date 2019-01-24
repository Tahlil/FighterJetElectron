function Score() {
	this.ctx = canvas.getCanvasCtx('canvasScore');
  this.score = 0;
  this.scoreForKillingOneEnemy = 10;
	this.options = {
		width: window.innerWidth,
		height: window.innerHeight,
		drawWidth: window.innerWidth,
		drawHeight: window.innerHeight
  };
  
}

Score.prototype.drawScoreCanvas = function () {
	canvas.draw(this.ctx, this.options);
	this.ctx.fillStyle = "hsla(0,0%,0%,0.5)";
	this.ctx.font = "bold 20px Arial";
};

Score.prototype.update = function () {
	this.score = Math.ceil(this.score/*+*/);
	$('#score').text(this.score);
};

Score.prototype.updateScoreForKill = function(){
  this.score += (this.scoreForKillingOneEnemy * level.getCurrentLevel().levelScoreFactor);
	this.update();
	
}
