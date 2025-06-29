        
        function getComputerChoice() {
            let randomNum = Math.random()

            if (randomNum < 1 / 3) {
                return "rock";
            } 
            
            else if (randomNum < 2 / 3) {
                return "paper";
            } 
            
            else {
                return "scissors";
            }
        }

      
        function playRound (humanChoice, computerChoice) {
            
            if(humanChoice === computerChoice) {
                displayMessage("It's a draw!");
                return "draw"

            }
            else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                displayMessage(`You win this round! ${humanChoice} beats ${computerChoice}`);
                return "human";
            }
            
            else {
                displayMessage(`You lose this round! ${computerChoice} beats ${humanChoice}`);
                return "computer";     

            }
        }    

        let humanScore = 0;
        let computerScore = 0;
        const resultsDiv = document.getElementById("results");

        function displayMessage(message) {
            resultsDiv.innerHTML += `<p>${message}</p>`;

        }

        function updateScore(){
            resultsDiv.innerHTML +=`<p>Score: Human ${humanScore} - Computer ${computerScore}</p>`;
        }
        
        function checkWinner() {
    if (humanScore === 5) {
        resultsDiv.innerHTML += `<h2>You win the game!</h2>`;
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += `<h2>Computer wins the game!</h2>`;
        disableButtons();
    }
    }

    function disableButtons() {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }

    function handleClick(humanChoice) {
        if (humanScore >= 5 || computerScore >= 5) return;

        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        updateScore();
        checkWinner();
    }

        document.getElementById("rock").addEventListener("click", () => handleClick("rock"));
        document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
        document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));