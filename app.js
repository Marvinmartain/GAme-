const gamer = gameInput => {
    gameInput = gameInput.toLowerCase();
    if (gameInput === 'rock' || gameInput === 'scissors' || gameInput === 'paper'){
      return gameInput;
    }else {
      console.log('Error, type: rock, paper or scissors.');
    }
  }
 
  const gamer = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  
  
  // determining the winner
  const whoseWinning = (player1, player2) => {
    if (player1 === player2) {
      return 'Tie play again!';
    }
    if  (player1 === 'rock') {
      if (player2 === 'paper') {
        return "Player2 won!";
      } else {
        return "Congratulation, Player1 won!";
      }
    }
  if (player1 === 'paper') {
    if (player2 === 'scissors') {
      return "Sorry, Player1 won!";
    } else {
      return "Congrats, you won!";
      }
    } 
    if (player1 === 'scissors') {
      if (player2 === 'rock') {
        return "Sorry, Player1 won!";
      } else {
        return "Congrats, you won!";
      }
    }
  };
  
    
  const playGame = () => {
    const player1 = player1('paper');
    const player2 = player2();
    console.log('player1 threw: ' + player1);
  
    console.log('The player2 threw: ' + player2);
  
    console.log(whoseWinning(player1, player2));
  };
  
  playGame()