class Enemies {   
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.element = document.createElement("img");
        this.element.src = "images/275592.gif";
        this.left = 0;
        this.width = 100;
        this.height = 100;
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);
        this.direction = 1;
    }
        
    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }
        
    move(){
        if (this.left <= 0) {
            this.direction = 1;
        } else if (this.left >= window.innerWidth - this.width) {
            this.direction = -1;
        }

        this.left += this.direction;
        this.updatePosition();
    }
}
    