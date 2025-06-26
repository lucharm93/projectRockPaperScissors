        
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


        function getHumanChoice() {
            let choice = prompt("Please choose: Rock, Paper or Scissors");
            return choice.toLowerCase();
        } 

        function playRound (humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
        
            if(humanChoice === computerChoice) {
                console.log("It's a draw!")

            }
            else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
                return "human";
            }
            
            else {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
                return "computer";     

            }
        }    

      function playGame(){
        let humanScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++) {
            console.log(`Round ${i + 1}:`);
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            let winner = playRound(humanChoice, computerChoice);

            if (winner === "human") {
                humanScore++;
            }

            else if (winner === "computer"){
                computerScore++;
            }
        }

        console.log(`Score: Human ${humanScore} - Computer: ${computerScore}`);
        
        if (humanScore > computerScore){
            console.log("You win the game!")
        } else if (computerScore > humanScore){
            console.log("Computer wins the game!")
        } else {
            console.log("It's a draw!!")
        }
      }

      playGame();