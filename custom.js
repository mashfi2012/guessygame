var username = prompt("Enter your nickname :");
var userguess = parseFloat(prompt("Enter your guess number from 1 to 10 :"));

document.getElementById("name").innerHTML = username;
document.getElementById("guess").innerHTML = "Guess no : " + userguess;

var random_computer = Math.floor( Math.random()*10 + 1 );

function match_num(){
    if(userguess==random_computer){
        document.getElementById("random-num").innerHTML = "You Win! Super guess! Bravo !";
    }
    else{
        document.getElementById("random-num").innerHTML = "You Lost! Random number was " + random_computer + " !";
    }
}