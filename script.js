const scoreboard = []

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
    scoreboard.push('tie')
    return
  }

  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'paper') {
        log.textContent = "You Lose! Paper beats Rock"
        scoreboard.push('computer')
        return
      }
      break;
    
    case 'paper':
      if (computerSelection === 'scissors') {
        log.textContent = "You Lose! Scissors beats Paper"
        scoreboard.push('computer')
        return
      }
      break;
    
    case 'scissors':
      if (computerSelection === 'rock') {
        log.textContent = "You Lose! Rock beats Scissors"
        scoreboard.push('computer')
        return
      }
      break;
  
    default:
      break;
  }

  log.textContent = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
  scoreboard.push('player')
  return
}

const btnArray = Array.from(document.querySelectorAll('button'))
btnArray.forEach(btn => {
  btn.addEventListener('click', () => playRound(btn.value, getComputerChoice()))
})

