const HWIN_STATEMENT = "Human";
const MWIN_STATEMENT = "Machine";
const DRAW_STATEMENT = "Draw";
const NO_OF_ROUNDS = 5;

const HSCORE_CONTAINER = "humanScoreContainer";
const MSCORE_CONTAINER = "machineScoreContainer";


let humanScore = 0;
let machineScore = 0;
let numRounds = 0;


function resetScoreAndRound() {
    humanScore = 0;
    machineScore = 0;
    numRounds = 0;
}

function getMachineChoice() {
    const choiceObject = {
        0: "rock",
        1: "paper",
        2: "scissors"
    };

    const numChoice = Math.floor(Math.random() * 3);
    console.log("Choice(Machine): " + choiceObject[numChoice]);
    return choiceObject[numChoice];
}


function displayResults(results) {

    const humanInfo = document.querySelector("#humanInfoHolder");
    const machineInfo = document.querySelector("#machineInfoHolder");

    // Containers only defined so I can delete a complete containers while 
    // cleaning results. (Only One Time Creation!)

    if (!document.querySelector("#" + HSCORE_CONTAINER) && !document.querySelector("#" + MSCORE_CONTAINER)) {
        const humanScoreContainer = document.createElement('div');
        const machineScoreContainer = document.createElement('div');
        machineScoreContainer.setAttribute('id', MSCORE_CONTAINER);
        humanScoreContainer.setAttribute('id', HSCORE_CONTAINER);

        humanInfo.appendChild(humanScoreContainer);
        machineInfo.appendChild(machineScoreContainer);
    }


    const humanScoreBin = document.createElement("div");
    const machineScoreBin = document.createElement("div");

    humanScoreBin.classList.add("scoreText", "center");
    machineScoreBin.classList.add("scoreText", "center");


    if (results === HWIN_STATEMENT) {
        humanScoreBin.textContent = "1";
        machineScoreBin.textContent = "0";
    }

    if (results === DRAW_STATEMENT) {
        humanScoreBin.textContent = "0";
        machineScoreBin.textContent = "0"
    }

    if (results === MWIN_STATEMENT) {
        humanScoreBin.textContent = "0";
        machineScoreBin.textContent = "1";
    }


    humanScoreContainer.appendChild(humanScoreBin);
    machineScoreContainer.appendChild(machineScoreBin);

    if (numRounds == NO_OF_ROUNDS)
    {
        const resultMessage = document.querySelector("#resultMessage");
        resultMessage.textContent = (humanScore > machineScore) ? "Human Wins 🔥" : ((machineScore > humanScore) ? "Machine Wins! 😹" : "Draw"); 
    }
}

function executeLogicForGame(humanChoice, machineChoice) {
    let results = DRAW_STATEMENT;
    const beats = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    };

    if (humanChoice === machineChoice) {
        results = DRAW_STATEMENT;
    }

    if (beats[humanChoice] === machineChoice) {
        ++humanScore;
        results = HWIN_STATEMENT;
    }

    if (beats[machineChoice] === humanChoice) {
        ++machineScore;
        results = MWIN_STATEMENT;
    }

    displayResults(results);
    return results;
}


function playGame(humanChoice) {
    ++numRounds;
    let machineChoice = getMachineChoice();
    console.log(`> Results @ Round: ${numRounds} is > "${executeLogicForGame(humanChoice, machineChoice)}" (Human: ${humanChoice}, Machine: ${machineChoice})`);
}

function addResetButtonListeners() {

    const resetButton = document.querySelector("#resetGameButton");

    resetButton.addEventListener('click', (event) => {
        const humanScoreContainer = document.querySelector("#" + HSCORE_CONTAINER);
        const machineScoreContainer = document.querySelector("#" + MSCORE_CONTAINER);
        const resultMessage = document.querySelector("#resultMessage");

        console.log(humanScoreContainer);
        console.log(machineScoreContainer);

        if (humanScoreContainer) {
            humanScoreContainer.remove();
        }

        if (machineScoreContainer) {
            machineScoreContainer.remove();
        }
        console.log("Resetting game");

        resetScoreAndRound();
        resultMessage.textContent = "";

    });
}

function addGameButtonListeners() {

    const div = document.querySelector('#buttonContainer');
    div.addEventListener('click', (event) => {
        if (numRounds < NO_OF_ROUNDS) {

            let target = event.target;

            if (event.target.tagName == "IMG") {
                target = event.target.parentElement;
            }

            switch (target.id) {
                case "r":
                    playGame("rock");
                    break;
                case "p":
                    playGame("paper");
                    break;
                case "s":
                    playGame("scissors");
                    break;
                default:
                    console.log(event);
                    break;
            }
        }
    });
}

addGameButtonListeners();
addResetButtonListeners();