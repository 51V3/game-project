class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-over");
        this.player = new Player(this.gameScreen , "50%", "40%", 4, 4, "../images/sight.png");
        this.height = 600;
        this.width = 800;
        this.enemies = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
        this.loadingEnemie = false;
        
    }

    start(){
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "flex"
        this.gameLoop();
    }

    gameLoop(){
        if(this.gameOver){
            return
        }
        this.update()
    }

    update(){
        for (let i=0; i < this.enemies.length; i++){
            const enemie = this.enemies[i];
            enemie.move();

            if(this.enemies.height >= 50){
                this.lives --;
                enemie.element.remove();
                this.enemies.splice(i, 1);
            }

            else if(shotCollision(enemie)) {
                this.score ++;
                enemie.element.remove();
                this.enemies.splice(i, 1);
            }

            if(this.lives === 0){
                this.endGame();
            }
        };

        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;
        if(!this.enemies.length && !this.loadingEnemie){
            this.loadingEnemie = true;
            setTimeout(() =>{
                this.enemies.push(new Enemie(this.gameScreen));
                this.loadingEnemie = false;
            }, 500);
        }
        
    }
    endGame(){
        this.gameOver = true;
        this.player.element.remove();
        this.enemies.forEach(enemie=>{
            enemie.element.remove();
        });
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
};
