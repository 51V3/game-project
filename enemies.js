class Enemies {   
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.element = document.createElement("img");
        this.element.src = "./images/275592.gif";
        this.left = Math.random() * (this.gameScreen.offsetWidth - 60);
        this.top = 50;
        this.width = 60;
        this.height = 60;
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.marginTop = "-200px";
        this.gameScreen.appendChild(this.element);
        this.directionX = 1;
        this.directionY = 1;
        this.boundaryX = this.gameScreen.offsetWidth - this.width;
        this.boundaryY = this.gameScreen.offsetHeight + 200 - this.height;
        this.move();
    }
        
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
        if (this.left <= 0) {
            this.directionX = 5;
        } else if (this.left + this.width>= this.boundaryX) {
            this.directionX = -5;
        }

        if (this.top <= 200) {
            this.directionY = 5;
        } else if (this.top + this.height >= this.boundaryY) {
            this.directionY = -5;
        }
        this.width += 0.2;
        this.height += 0.2;
        this.left += this.directionX;
        this.top += this.directionY;
        this.updatePosition();

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        requestAnimationFrame(() => this.move());
    }
}
