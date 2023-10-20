window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
  
    let game;
  
    startButton.addEventListener("click", function () {
      game = new Game();
      game.start();
    });
  
    restartButton.addEventListener("click", function () {
      
      restartGame();
    })
  
    
    function restartGame() {
      location.reload();
    }
  
    function startGame() {
      console.log("start game");
    }
}
