let playerScore = 0
let computerScore = 0
let winner
const buttons = document.querySelectorAll('input')

function reload(winner){
    alert(`${winner} won`);
    location.reload();
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playerChoice = button.value
        playRound(button.value)
    })
})

function computerPlay() {
    let optionsList = ["rock", "paper", "scissors"];
    let option = optionsList[Math.floor(Math.random() * optionsList.length)];
    return option
  }

function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay()

    //Tie Condition
    if (playerChoice == computerChoice){
        result = (`It's a tie, you both chose ${playerChoice}` + `<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`)  
    }

    //Win  Condition
    else if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'scissors' && computerChoice == 'paper') ||
    (playerChoice == 'paper' && computerChoice == 'rock')) {
    playerScore++
    result = (`You won, ${playerChoice} beats ${computerChoice}` + `<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`)

        if (playerScore == 5){
        winner = "you"
        reload(winner)
        } 
    }  

    //Lose Condition
    else {
    computerScore++
    result = (`You lost, ${computerChoice} beats ${playerChoice}` + `<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`)  

        if (computerScore == 5){
            winner = 'computer'
        reload(winner)   
        }
    }

    document.getElementById("score").innerHTML = result 

    return
}







  