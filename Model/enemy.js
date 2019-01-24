function Enemy() {
  this.ctx = canvas.getCanvasCtx('canvasEnemy');
  this.enemyOptions = {
    srcY: 540,
    drawX: Math.floor(Math.random() * 1000) + window.innerWidth,
    drawY: Math.floor(Math.random() * 360),
    width: 100,
		height: 30
  };
  this.movement = false;
  this.rewardPoints = 5;
  this.goUp = true;
  this.speed = 2;
  this.canShoot = false;
  this.warOptions =[];
}
Enemy.prototype.verticalMovement = 0.5;

Enemy.prototype.drawEnemyCanvas = function () {
  this.enemyOptions.drawX -= this.speed;
  if (this.movement) {
    if(this.goUp){
      this.enemyOptions.drawY-=this.verticalMovement;
    }
    else{
      this.enemyOptions.drawY+=this.verticalMovement;
    }
    if (this.enemyOptions.drawY === 0) {
      this.goUp = false;
    }
    else if (this.enemyOptions.drawY === 500) {
      this.goUp = true;
    }
    if (this.canShoot) {
      //enemy.warOptions.isShooting = true;
      // enemy.checkShooting();
      // enemy.drawAllBullets();
    }
    // console.log(this.enemyOptions.drawY);
  }


  canvas.draw(this.ctx, this.enemyOptions);
  this.escaped();
};

Enemy.prototype.escaped = function () {
  if (this.enemyOptions.drawX <= 0) {
    this.recycleEnemy();
  }
};

Enemy.prototype.recycleEnemy = function () {
  // console.log("enemy drawn");
  // console.log("Speed: " + this.speed);
  this.enemyOptions.drawX = Math.floor(Math.random() * 1000) + window.innerWidth;
  this.drawY = Math.floor(Math.random() * 360);
  canvas.currentTotalEnemies++;
  // console.log("Current level total: " + canvas.currentTotalEnemies);
  // console.log("Number of enemies: " + level.getCurrentLevel().numberOfEnemies);
  // canvas.currentSpawnAmount--;
  // if(canvas.currentSpawnAmount === 0){
    
  // }
  if (canvas.currentTotalEnemies > level.getCurrentLevel().numberOfEnemies) {
    
    // console.log(canvas.enemies);
    // console.log("update");
    canvas.updateLevel();
  }
}

Enemy.prototype.checkShooting = Jet.prototype.checkShooting;
Enemy.prototype.drawAllBullets = Jet.prototype.drawAllBullets;
