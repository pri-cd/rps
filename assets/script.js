let humanScore = 0;
let machineScore = 0;
let roundNo = 0;

const numRounds = 5;
const choiceObject = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

const beats = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};

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

let printResults = (winner) => {

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
        printResults("draw");
    }
    else if (beats[humanChoice] === machineChoice) {
        ++humanScore;
        printResults("human");
    }
    else if (beats[machineChoice] === humanChoice) {
        ++machineScore;
        printResults("machine");
    }

    return;
};

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