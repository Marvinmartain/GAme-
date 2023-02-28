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

//Winning Hand
const confirmWinner() {
    if (player1Hand == player2Hand) {
        document.getElementById('result').innerHTML = 'TIE';
    } else if (player1Hand == 'rock' && player2Hand === 'scissors' || player1Hand == 'paper' && player2Hand === 'rock' || )
}