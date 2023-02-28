let player1Hand = '';
let player2Hand = '';

//Player Hand
const pickHand(hand, player) {
   if (player === 1) {
    player1Hand = hand;
    document.getElementById('player1-hand').src = hand + "http://musicuentos.com/wp-content/blogs.dir/1/files/2015/10/rock-paper-scissors-156171_1280.png";

   } else {
    player2Hand = hand;
    document.getElementById('player2-hand').src = hand + "http://musicuentos.com/wp-content/blogs.dir/1/files/2015/10/rock-paper-scissors-156171_1280.png";
   }
   confirmWinner();
}



const player1Hand 
const player2Hand= () => {
    const pickHand = player1Hand, player2Hand('paper');
    const player1 = player2Hand();
    console.log('You threw: ' + pickHand);
 
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(player1Hand, player2Hand));
  };
  
  player1Hand()
  player2Hand()