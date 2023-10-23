class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-over");
        this.player = new Player(gameScreen , left, top, width, height, imgSrc);
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
            return
        }
        this.update()
    }

    update(){
        for (let i=0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();

            if(this.obstacles.height >= 50){
                this.lives --;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
            }

            else if(shotCollision(obstacle)) {
                this.score ++;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
            }

            if(this.lives === 0){
                this.endGame();
            }
        };

        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;
        if(!this.obstacles.length && !this.loadingObstacle){
            this.loadingObstacle = true;
            setTimeout(() =>{
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.loadingObstacle = false;
            }, 500);
        }
        
    }
    endGame(){
        this.gameOver = true;
        this.player.element.remove();
        this.obstacles.forEach(obstacle=>{
            obstacle.element.remove();
        });
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
};
