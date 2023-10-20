class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-over");
        this.player = null
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
        this.loadingObstacle = false;

    }

    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none"
       
        this.gameScreen.style.display = "block"

        this.gameLoop();
    }

    gameLoop(){
        if(this.gameOver){
            return;
        }
        this.update;
        
    }

    update(){
        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;

    }

    endGame(){

    }
}