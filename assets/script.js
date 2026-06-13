const MSG_HUMAN_WIN = "Human Wins";
const MSG_MACHINE_WIN = "Machine Wins";
const MSG_DRAW = "Draw";
const NO_OF_ROUNDS = 5;


let humanScore = 0;
let machineScore = 0;
let numRounds = 0;


function removeResultsIfExists() {
    const resultMsgExists = document.querySelector("#showResults");
    if (resultMsgExists) {
        resultMsgExists.remove();
    }
}

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


function executeLogicForGame(humanChoice, machineChoice) {
    const beats = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
    };

    if (humanChoice === machineChoice) {
        return MSG_DRAW;
    }

    if (beats[humanChoice] === machineChoice) {
        ++humanScore;
        return MSG_HUMAN_WIN;
    }

    if (beats[machineChoice] === humanChoice) {
        ++machineScore;
        return MSG_MACHINE_WIN;
    }
}

function displayResults() {
    removeResultsIfExists();

    const divResults = document.querySelector("#results");
    const resultMsg = document.createElement('span');


    resultMsg.setAttribute("id", "showResults");
    resultMsg.style.color = "brown";
    resultMsg.textContent = MSG_DRAW;

    if (humanScore > machineScore) {
        resultMsg.style.color = "green";
        resultMsg.textContent = MSG_HUMAN_WIN;
    }

    if (machineScore > humanScore) {
        resultMsg.style.color = "red";
        resultMsg.textContent = MSG_MACHINE_WIN;
    }

    divResults.append(resultMsg);
}


function playGame(humanChoice) {
    ++numRounds;
    let machineChoice = getMachineChoice();
    console.log(`> Results @ Round: ${numRounds} is > "${executeLogicForGame(humanChoice, machineChoice)}" (Human: ${humanChoice}, Machine: ${machineChoice})`);

    if (numRounds === NO_OF_ROUNDS) {
        displayResults();
        resetScoreAndRound();

    }
}

function addButtonListeners() {


    const div = document.querySelector('#buttonContainer');
    div.addEventListener('click', (event) => {
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
    });
}

addButtonListeners();