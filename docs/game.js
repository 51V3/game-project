class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-over");
        this.gameWinScreen = document.getElementById("game-win")
        this.player = new Player(this.gameScreen, 650, 250, 40, 40, "./images/sight.png");
        this.height = 600;
        this.width = 800;
        this.enemies = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
        this.gameWin = false;
        this.loadingEnemie = false;
        this.isLevelUp = [false, false, false, false]
        this.collide = document.getElementById("audio-collide");
    }

    start(){
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "flex"
        this.gameLoop();
    }

    gameLoop(){
        if(this.gameOver){
            return;
        }
        this.update();
        requestAnimationFrame(() => this.gameLoop()); 
    }
   
    updateCollision(){
        for (let i=0; i < this.enemies.length; i++){
            const enemy = this.enemies[i];
        
            if(this.player.shotCollision(enemy)) {
                this.collide.play()
                this.score ++;
                enemy.directionX = 0;
                enemy.directionY = 0;
                enemy.grow = 1;
                setInterval(() => {
                    enemy.element.src = "./images/explosion-boom.gif"
                }, 100);
                setTimeout(() => {
                    enemy.element.remove();
                    this.enemies.splice(i, 1);
                }, 250);
            }  
        }
    }

    update(){
        for (let i = this.enemies.length - 1; i >= 0; i--){

            const enemy = this.enemies[i];
            
            if(enemy.height >= 250){
                document.getElementById("collision").style.display = "block";
                document.getElementById("score").style.display = "none";
                document.getElementById("score-set").style.display = "none";
                document.getElementById("lives").style.display = "none";
                document.getElementById("lives-set").style.display = "none";
                document.getElementById("spaceship").src = "./images/gifmaker_me.gif";
                setTimeout(() => {
                    document.getElementById("score").style.display = "flex";
                    document.getElementById("score-set").style.display = "flex";
                    document.getElementById("lives").style.display = "flex";
                document.getElementById("lives-set").style.display = "flex";
                }, 200);
                setTimeout(() => {
                    document.getElementById("spaceship").src = "./images/painel base espacial.png";
                    document.getElementById("collision").style.display = "none";
                }, 500);
                this.isLevelUp[2] = true;
                if(this.score >= 3 && this.score < 7){
                    this.lives --;
                    enemy.element.remove();
                    this.enemies.splice(i, 2);
                } else if(this.score >= 7 && this.score < 13){
                    this.lives --;
                    enemy.element.remove();
                    this.enemies.splice(i, 3);
                } else if(this.score < 3){
                    this.lives --;
                    enemy.element.remove();
                    this.enemies.splice(i, 1);
                }
            } else if(this.lives <= 0){
                this.lives = 0;
                this.endGame();
            } else if(this.score === 13){
                this.score = 13;
                this.winGame();
            } 
        };

        if (this.score === 3 && this.isLevelUp[0] === false){
            document.getElementById("new-level").style.display = "flex";
            setTimeout(() => {
                document.getElementById("new-level").style.display = "none";
                this.isLevelUp[0] = true;
            }, 1000);
            console.log(this.isLevelUp[0])
        }
        if (this.score === 7 && this.isLevelUp[1] === false){
            document.getElementById("new-level").style.display = "flex";
            setTimeout(() => {
                document.getElementById("new-level").style.display = "none";
                this.isLevelUp[1] = true;
            }, 1000);
            console.log(this.isLevelUp[0])
        }

        let score = document.getElementById("score");
        let lives = document.getElementById("lives");
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;
        if(this.score >= 3 && this.score < 7){
            if(!this.enemies.length && !this.loadingEnemie){
                this.loadingEnemie = true;
                setTimeout(() =>{
                    this.enemies.push(new Enemies(this.gameScreen, 8, 8, 60, 60, 1.005));
                    this.enemies.push(new Enemies(this.gameScreen, 8, 8, 60, 60, 1.005));
                    this.loadingEnemie = false;
                }, 500);
            }
        } else if(this.score >= 7 && this.score < 13){
            console.log("working?")
            if(!this.enemies.length && !this.loadingEnemie){
                this.loadingEnemie = true;
                setTimeout(() =>{
                    this.enemies.push(new Enemies(this.gameScreen, 12, 12, 60, 60, 1.005));
                    this.enemies.push(new Enemies(this.gameScreen, 12, 12, 60, 60, 1.005));
                    this.enemies.push(new Enemies(this.gameScreen, 12, 12, 60, 60, 1.005));
                    this.loadingEnemie = false;
                }, 500);
            }
        } else {
            if(!this.enemies.length && !this.loadingEnemie){
                this.loadingEnemie = true;
                setTimeout(() =>{
                    this.enemies.push(new Enemies(this.gameScreen, 5, 5, 60, 60, 1.003));
                    this.loadingEnemie = false;
                }, 500);
            };
        };
    };

    winGame(){
        this.gameWin = true;
        this.player.element.remove();
        this.enemies.forEach(enemie=>{
            enemie.element.remove();
        });
        this.gameScreen.style.display = "none";
        this.gameWinScreen.style.display = "block";
    };

    endGame(){
        this.gameOver = true;
        this.player.element.remove();
        this.enemies.forEach(enemie=>{
            enemie.element.remove();
        });
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}

