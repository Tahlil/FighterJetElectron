var Level = function(){
  this.currentLevel = 0;
  this.levelDetails = {
    level1:{
      level:1,
      numberOfEnemies: 6,
      speed:  2,
      spawn: 4,
      levelScoreFactor:1
    } ,
    level2: {
      level:2,
      numberOfEnemies: 10,
      speed:  4,
      spawn: 7,
      levelScoreFactor:2
    },
    level3:{
      level:3,
      numberOfEnemies: 1600000,
      speed:  8,
      spawn: 12,
      levelScoreFactor:3
    }  
  };
  
}

Level.prototype.getCurrentLevel = function () {
  if (this.currentLevel === 1) {
    return this.levelDetails.level1;
  }
  else if (this.currentLevel === 2) {
    return this.levelDetails.level2;
  }
  else {
    return this.levelDetails.level3;
  }
}