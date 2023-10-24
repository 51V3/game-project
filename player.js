class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
      this.health = 100;
      this.damage = 10;
      this.gameScreen = gameScreen;
      this.left = parseFloat(left) / 100 * this.gameScreen.offsetWidth;
      this.top = parseFloat(top) / 100 * this.gameScreen.offsetHeight;
      this.width = width;
      this.height = height;
      this.imgSrc = imgSrc;
      this.element = document.createElement("img");
      this.element.style.position = "absolute";
      this.element.style.zIndex = "1";
      this.element.style.display = "block"; // Add this line to display the player element
      this.directionX = 0;
      this.directionY = 0;

      this.element.src = imgSrc;

      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;

      this.gameScreen.appendChild(this.element);
  }

  shotCollision(enemy) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = enemy.element.getBoundingClientRect();

      if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
      ) {
          return true;
      } else {
          return false;
      }
  }

  move() {
      // Update the player's position based on the direction
      this.left += this.directionX;
      this.top += this.directionY;

      // Update the CSS
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  }
}
