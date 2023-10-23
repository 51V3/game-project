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
        this.boundary = this.gameScreen.offsetWidth - this.width;
        this.scaleFactor = 1.2;
        /* this.health = 50;
        this.damage=5;
        this.isCollapsing= false; */
    }
        
    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }

    move(){
        if (this.left <= 0) {
            this.direction = 1;
            this.width += 50;
            this.height += 50;
            this.element.style.transform = `scale(${this.width}px, ${this.height}px)`;
        } else if (this.left >= this.boundary) {
            this.direction = -1;
            this.width += 50;
            this.height += 50;
            this.element.style.transform = `scale(${this.width}px, ${this.height}px)`;
        }

        this.left += this.direction;
        this.updatePosition();
        requestAnimationFrame(() => this.move());
    }
}

    