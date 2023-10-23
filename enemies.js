class Enemies {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.element = document.createElement("img");
        this.element.src = "images/275592.gif";
        this.left = 0;
        this.width = 100;
        this.height = 100;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);
    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }
    move(){
        if (this.left > window.innerWidth - this.width){
            this.left--
        }
        else if (this.right > window.innerWidth + this.width){
            this.left++
        }
        this.updatePosition()
    }
}