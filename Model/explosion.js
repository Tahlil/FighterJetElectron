function Explosion() {
	this.ctx = canvas.getCanvasCtx('canvasJet');
	this.options = {
		srcX: 750,
		srcY: 500,
		width: 50,
		height: 50,
		drawX: 0,
		drawY: 0,
		hasHit: false,
		currentFrame: 0,
		totalFrame: 30,
		drawWidth: 50,
		drawHeight: 50
	};
	this.speed = 3;
}

Explosion.prototype.drawExplosionCanvas = function () {
	if (this.options.currentFrame < this.options.totalFrame) {
		canvas.draw(this.ctx, this.options);
		this.options.currentFrame++;
	} else {
		this.hasHit = false;
		this.currentFrame = 0;
	}
};