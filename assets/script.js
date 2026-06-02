/**
 * 
 * Pseudocode: 
 * 1. Ask user for their input (rock, paper or scissors) : Case-Insensitive.
 * 3. Make computer choose any random choice.
 * 4. Compare and make one win. 
 * 5. Increment their scores, such that- 
 *  5.1. After they play 5 rounds- declare a winner or draw.
 */

let humanScore = 0;
let machineScore = 0;
let roundNo = 0;

const numRounds = 5;
const choiceObject = {
    0: "rock",
    1: "paper",
    2: "scissors"
};


/**
 * Note: I wish I could use something like global variable inside a class with get/set methods, but I'm not too far in JS. 
 * */
let resetScoreAndRound = () => {
    humanScore = 0;
    machineScore = 0;
    roundNo = 0;
};

let getComputerChoice = () => {
    const numChoice = Math.floor(Math.random() * 3);
    let choice = "";

    choice = choiceObject[numChoice];
    console.log("Choice(Machine): " + choice);
    return choice;
};


let getHumanChoice = () => {
    let choice = "";
    choice = prompt("Enter (Rock, Paper, Scissors):") || null;

    if (choice !== null) {
        console.log("Choice(Human): " + choice);
        return choice.trim().toLowerCase();
    }
    return null;
};

let printInfo = (winner) => {

    let statement = "";
    if (winner === "draw") {
        statement = statement.concat("Draw! Round: ");
    }
    else {
        statement = statement.concat(winner, " ", "Wins! Round: ");
    }
    console.log(statement + roundNo + " Score (Machine | Human): " + machineScore + " | " + humanScore + ".");

};

let executeRound = (humanChoice, machineChoice) => {

    const r = choiceObject[0];
    const p = choiceObject[1];
    const s = choiceObject[2];


    ++roundNo;
    if (humanChoice === machineChoice) {
        // No points awarded.
        printInfo("draw");
    } else if ((humanChoice === r && machineChoice === s) ||
        (humanChoice === p && machineChoice === r) ||
        (humanChoice === s && machineChoice === p)) {
        ++humanScore;
        printInfo("human");
    } else if ((machineChoice === r && humanChoice === s) ||
        (machineChoice === p && humanChoice === r) ||
        (machineChoice === s && humanChoice === p)) {
        ++machineScore;
        printInfo("machine");
    }
    return;
};

/**
 * Description: A game will have 5 Rounds of RPS.
 * Note: We'll increment the score as said.
 */
let playGame = () => {

    resetScoreAndRound();
    for (let i = 0; i < numRounds; i++) {

        const humanChoice = getHumanChoice();

        if (humanChoice !== null) {
            executeRound(humanChoice, getComputerChoice());
        }
        else {
            console.log("Game Ends... (Bad Input, Resetting Scores!)");
            resetScoreAndRound();
        }
    }

    console.log((machineScore > humanScore) ? "Machine Wins!!!" : (machineScore < humanScore) ? "Human Wins" : "Drawwww!!!!");
};


playGame();