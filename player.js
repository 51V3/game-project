class Player {
  constructor(gameScreen, left, top, width, height, imgSrc, element) {

    this.health = 100;
    this.damage = 10;
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.imgSrc = imgSrc;
    this.element = document.createElement("img");
    this.element.style.position = "relative";
    this.element.style.zIndex = "7";
    this.directionX = 0;
    this.directionY = 0;
    
    this.element.src = imgSrc;

    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element)
  
  }

  shotCollision (enemy){
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = enemy.element.getBoundingClientRect();

    if (playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top) {
        
        return true;
      }

      else {

        return false;
    }
  }

  move(){ //copiado do race car

    //update player's car position based on direction
    this.left += this.directionX;
    this.top += this.directionY;

    console.log("oi")

    // Right - side (limit)
    if(this.left + this.width >= this.gameScreen.offsetWidth){
        this.left = this.gameScreen.offsetWidth - this.width;
    }
    // Left - side (limit)
    else if(this.left <= 0){
        this.left = 0;
    }
    // Bottom - side (limit)
    if (this.top >= this.gameScreen.offsetHeight - this.height){
        this.top = this.gameScreen.offsetHeight - this.height;
    }
    // Top - side (limit)
    else if(this.top <= 0){
        this.top = 0;
    }

    this.updatedPosition()
}

updatedPosition(){
    // Update CSS
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}
  } 
    
    // Para por na classe 'Game' 
    /*function handleDamage(player, enemy) {
      if (checkCollision(player, enemy)) {
        enemy.health -= player.damage;
    
        if (enemy.health <= 0) {
          // Start the collapse animation
          animateCollapsingEnemy(enemy);
        }
      }
    */
    
    