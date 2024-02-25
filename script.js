
//0=rock
//1=paper
//2=scissors

let numWins = 0;
let numLosses = 0;
let numTies = 0;
let userchoice;
let u;

//ask for number of rounds
let numRounds = parseInt(prompt("How many rounds would you like to play?"));

//user choice function
const userChoice = function() {
    u = prompt("Choose rock, paper or scissors (enter as r, p, or s)")
    if(u == "r") {
        return 0;
    } else if(u == "p") {
        return 1;
    } else if(u == "s") {
        return 2;
    }
}

//comp choice function
const compChoice = function() {
    return Math.floor(Math.random() * 3);
}


//compare function
const compare = function(choice1, choice2) {
    if(choice1 == choice2) {
        numTies += 1;
        return ("It's a tie!");
    }if(choice1 == 0 && choice2 == 1) {
        numLosses += 1;
        return alert("You chose rock.The computer chose paper. You lost.");
    }if(choice1 == 0 && choice2 == 2) {
        numWins += 1;
        return alert("You chose rock. The computer chose scissors. You Win!");
    }if(choice1 == 1 && choice2 == 0) {
        numWins += 1;
        return alert("You chose paper. The computer chose rock. You Win!");
    }if(choice1 == 1 && choice2 == 2) {
        numLosses += 1;
        return alert("You chose paper. The computer chose scissors. You lose.");
    }if(choice1 == 2 && choice2 == 0) {
        numLosses += 1;
        return alert("You chose scissors. The computer chose rock. You lose.");
    }if(choice1 == 2 && choice2 == 1) {
        numWins += 1;
        return alert("You chose scisssors. The computer chose paper. You Win!");
    }
}

//run rounds
for(let i = 0; i < numRounds; i++) {   
    compare(userChoice(), compChoice())
}


alert("Number of ties: " + numTies + " | Number of wins: " + numWins  + " | Number of losses: " + numLosses);
