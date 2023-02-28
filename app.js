const pickHand = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
      return userInput;
    } else {
      console.log('Error, please type: rock, paper or scissors.');
    }
  };
  
  const getComputerChoice = () => {
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
  
  const determineWinner = (gamer, player1, player2) => {
    if (player1 === player2) {
      return 'This game is a tie!';
    }
    if  (player1 === 'rock') {
      if (player2 === 'paper') {
        return `${gamer} picked ${player1}, Player 2 wins!`;
      } else {
        return `${gamer} picked ${player1}, ${player2} wins!`;
      }
    }
    if (player1 === 'paper') {
      if (player2 === 'scissors') {
        return `${gamer} picked ${player1}, Player 2 wins!`;
      } else {
        return `${gamer} picked ${player1}, ${player2} wins!`;
      }
    } 
    if (player1 === 'scissors') {
      if (player2 === 'rock') {
        return `${gamer} picked ${player1}, Player 2 wins!`;
      } else {
        return `${gamer} picked ${player1}, ${player2} wins!`;
      }
    }
  };
  
  const playGame = () => {
    const gamer = 'Ed';
    const player1 = pickHand('paper');
    const player2 = getComputerChoice();
    console.log(`${gamer} picked ${player1}`);
    console.log(`Computer picked ${player2}`);
    console.log(determineWinner(gamer, player1, player2));
  };
  
  playGame(); 