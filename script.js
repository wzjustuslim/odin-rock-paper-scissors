const scoreboard = []

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rng = Math.floor(Math.random() * 3)
  return choices[rng]
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function checkScore(scores) {
  const playerScore = scores.filter(score => score === 'player').length
  const computerScore = scores.filter(score => score === 'computer').length
  const display = document.getElementById('display')

  if (playerScore === 5) {
    display.textContent = `You Win the game! Your score: ${playerScore} : ${computerScore}`
  }
  if (computerScore === 5) {
    display.textContent = `You Lose the game! Your score: ${playerScore} : ${computerScore}`
  }
  display.textContent = `Your score: ${ playerScore } : ${ computerScore }`
}

function playRound(playerSelection, computerSelection) {
  const log = document.getElementById('log')
  if (playerSelection === computerSelection) {
    log.textContent = "It's a tie!"
    scoreboard.push('tie')
    checkScore(scoreboard)
    return
  }

  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'paper') {
        log.textContent = "You Lose! Paper beats Rock"
        scoreboard.push('computer')
        checkScore(scoreboard)
        return
      }
      break;
    
    case 'paper':
      if (computerSelection === 'scissors') {
        log.textContent = "You Lose! Scissors beats Paper"
        scoreboard.push('computer')
        checkScore(scoreboard)
        return
      }
      break;
    
    case 'scissors':
      if (computerSelection === 'rock') {
        log.textContent = "You Lose! Rock beats Scissors"
        scoreboard.push('computer')
        checkScore(scoreboard)
        return
      }
      break;
  
    default:
      break;
  }

  log.textContent = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
  scoreboard.push('player')
  checkScore(scoreboard)
  return
}

const btnArray = Array.from(document.querySelectorAll('button'))
btnArray.forEach(btn => {
  btn.addEventListener('click', () => playRound(btn.value, getComputerChoice()))
})

