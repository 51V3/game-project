window.onload = function (){
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    startButton.addEventListener("click", function(){
        startGame();
    });

    function startGame(){
        console.log("start Game");
        game = new Game();
        game.start();
    }

    setInterval(()=>{
        game.update()
    }, 500);

    const shot = document.addEventListener("keydown", function(event){
        if(event.key === " " || event.key === "Spacebar"){
            game.updateCollision();
        }
    })

    function handleKeydown(event){
        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft", 
          "ArrowRight",
        ];

        if(possibleKeystrokes.includes(key)){
            event.preventDefault();
            if(game){
              switch (key){
                case "ArrowLeft": 
                  game.player.directionX = -5
                  break;
                case "ArrowRight": 
                  game.player.directionX = 5
                  break;
              }
            }
          }
        };

    window.addEventListener("keydown", handleKeydown);

    function handleKeyup(event){
        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft", 
          "ArrowRight",
        ];

        if(possibleKeystrokes.includes(key)){
            event.preventDefault();
            if(game){
              switch (key){
                case "ArrowLeft": 
                  game.player.directionX = 0 
                  break;
                case "ArrowRight": 
                  game.player.directionX = 0
                  break;
                }
            }
        }
    };
    window.addEventListener("keyup", handleKeyup);

    restartButton.addEventListener("click", function(){
        restartGame()
    })
    
    function restartGame() {
        location.reload();
      }
}
