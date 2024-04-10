function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rng = Math.floor(Math.random() * 3)
  return choices[rng]
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function playRound(playerSelection, computerSelection) {
  const log = document.getElementById('log')
  if (playerSelection === computerSelection) {
    log.textContent = "It's a tie!"
    console.log("It's a tie!")
    return 'tie'
  }

  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'paper') {
        log.textContent = "You Lose! Paper beats Rock"
        console.log("You Lose! Paper beats Rock")
        return 'computer'
      }
      break;
    
    case 'paper':
      if (computerSelection === 'scissors') {
        log.textContent = "You Lose! Scissors beats Paper"
        console.log("You Lose! Scissors beats Paper")
        return 'computer'
      }
      break;
    
    case 'scissors':
      if (computerSelection === 'rock') {
        log.textContent = "You Lose! Rock beats Scissors"
        console.log("You Lose! Rock beats Scissors")
        return 'computer'
      }
      break;
  
    default:
      break;
  }

  log.textContent = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
  console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
  return 'player'
}

function playGame() {
  // TODO: remove logic of 5 rounds
  const scores = ['', '', '', '', '']

  for (let i = 0; i < scores.length; i++) {
    scores[i] = playRound(getPlayerChoice(), getComputerChoice())
  }

  const playerScore = scores.filter(score => score === 'player').length
  const computerScore = scores.filter(score => score === 'computer').length

  if (playerScore === computerScore) {
    console.log(`The game is a Tie! Your score: ${playerScore} : ${computerScore} `)
    console.log('Scoreboard: ', scores)
    return
  }
  if (playerScore < computerScore) {
    console.log(`You Lose the game! Your score: ${playerScore} : ${computerScore} `)
    console.log('Scoreboard: ', scores)
    return
  }
  if (playerScore > computerScore) {
    console.log(`You Win the game! Your score: ${playerScore} : ${computerScore} `)
    console.log('Scoreboard: ', scores)
    return
  }

  alert('You somehow broke this game! =(')
}

const btnArray = Array.from(document.querySelectorAll('button'))
btnArray.forEach(btn => {
  btn.addEventListener('click', () => playRound(btn.value, getComputerChoice()))
})

