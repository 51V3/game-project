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
      this.element.style.position = "fixed";
      this.element.style.zIndex = "7";

      // Para move : this.directionX = 0;
      //             this.directionY = 0;
      
      this.element.src = imgSrc;

      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = left;
      this.element.style.top = top;

      this.gameScreen.appendChild(this.element)
    
    }

    shotCollision (enemy){
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = enemy.element.getBoundingClientRect();

      if (playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top > obstacleRect.bottom &&
          playerRect.bottom < obstacleRect.top) {
          // Mark the enemy as collapsing and return true
          enemy.isColliding = true;
          return true;
        }
        return false;
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
      
  }
