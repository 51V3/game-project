class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
      this.health = 100;
      this.damage = 10;
      this.gameScreen = gameScreen;
      this.left = left
      this.top = top
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

  moveWithMouse(mouseX, mouseY) {
        // Update the player's position based on the mouse cursor's position
        this.left = mouseX - this.width / 2; // Adjust for player's width
        this.top = mouseY - this.height / 2; // Adjust for player's height

        // Ensure the player stays within the boundaries
        const minX = 0;
        const maxX = this.gameScreen.offsetWidth - this.width;
        const minY = 0;
        const maxY = this.gameScreen.offsetHeight - this.height;

        this.left = Math.max(minX, Math.min(maxX, this.left));
        this.top = Math.max(minY, Math.min(maxY, this.top));
    

      // Update the CSS
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
 }

