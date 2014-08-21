var randomnumber= Math.floor(Math.random()*11);
var user = prompt("Enter user name");
var guessnum = prompt("Guess a number");
if (randomnumber == guessnum) {
  alert("You win " + user + "!");
} else {
  alert("You lose " + user + "!");
}
