let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {

    const choices = ["stone", "paper", "scissors"];

    // Computer randomly chooses
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    // Show choices
    document.getElementById("userChoice").textContent =
        userChoice.toUpperCase();

    document.getElementById("computerChoice").textContent =
        computerChoice.toUpperCase();

    let result = "";

    // Check winner
    if (userChoice === computerChoice) {

        result = "🤝 It's a Draw!";

    } 
    else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        result = "🎉 You Win!";
        userScore++;

    } 
    else {

        result = "💻 Computer Wins!";
        computerScore++;

    }

    // Display result
    document.getElementById("result").textContent = result;

    // Update score
    document.getElementById("userScore").textContent = userScore;

    document.getElementById("computerScore").textContent =
        computerScore;
}


function resetGame() {

    userScore = 0;
    computerScore = 0;

    document.getElementById("userChoice").textContent = "-";

    document.getElementById("computerChoice").textContent = "-";

    document.getElementById("result").textContent =
        "Make your choice!";

    document.getElementById("userScore").textContent = "0";

    document.getElementById("computerScore").textContent = "0";
}