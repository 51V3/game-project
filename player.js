class Player {
    constructor(x, y) {

      this.health = 100;
      this.damage = 10;
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.imgSrc = imgSrc;
      this.element = document.createElement("img");
    
    }

    position(){
        // o player neste caso (MVP) vai posicionar-se no centro da parte superior da arma(scope).
    }
}