var number = Math.round( Math.random() * 100 + 1);
var guess = "";
while (guess != number) {
  var guess = prompt("guess a number between 1 and 100");
if ( guess < number )
    alert("too low.");
else if ( guess > number )
    alert("too high.");
else
  alert("corect! you win!");
}
